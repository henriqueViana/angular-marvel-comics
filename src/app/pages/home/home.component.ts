import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store'

import { add } from '../../store/comics/actions' 
import { ComicsService } from '../../services/comics/comics.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public comics$: any;
  public typeThumb = '/portrait_xlarge.'

  public comicsState$: Observable<any> | undefined

  constructor(
    private router: Router,
    private store: Store<any>,
    private comicsService: ComicsService
  ) { }

  ngOnInit(): void {
    this.comicsState$ = this.store.pipe(
      select('comicsReducer')
    )

    this.comicsState$.subscribe(state => console.log('state---', state))
    this.store.dispatch(add({payload: this.comicsService.getAll()})) 

    this.comicsService.getAll().subscribe(res => {
      this.comics$ = res
      this.store.dispatch(add({payload: res}))
    });
    
  }

  goToDetails(id: string) {
    this.router.navigate([`/quadrinhos/${id}`]);
  }

}
