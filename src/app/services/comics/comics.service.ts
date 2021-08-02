import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { interval, Observable, of, timer } from 'rxjs';

import { environment } from '../../../environments/environment'
import { add } from 'src/app/store/comics/actions';
import { ComicsDTO } from 'src/app/dto/ComicsDTO';


@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private comics: ComicsDTO | undefined;
  private path = 'comics'
  private defaultParams = `?ts=${environment.api.timestamp}&apikey=${environment.api.apiKey}&hash=${environment.api.hash}`
  private headers = new HttpHeaders({ Accept: '*/*' })


  constructor(
    private http: HttpClient,
    private store: Store<any>,
  ) { }

  public getAll(): Observable<ComicsDTO> {
    // if (this.comics != undefined) {
    //   return of(this.comics)
    // }

    // this.store.pipe(
    //   select('comicsReducer')
    // )

    // let state;

    // this.store.pipe(
    //   select('comicsReducer'),
    // ).subscribe(
    //   s => { this.comics = s;}
    // );

    // if (Object.keys(this.comics).length > 0) {
    //   return 
    // }

    // const comics$ = this.http.get<ComicsDTO>(`${environment.api.baseUrl}${this.path}${this.defaultParams}`, { headers: this.headers })

    return this.http.get<ComicsDTO>(`${environment.api.baseUrl}${this.path}${this.defaultParams}`, { headers: this.headers })
  }

  public saveStore(data: any) {
    this.store.dispatch(add({ payload: data }))
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${environment.api.baseUrl}${this.path}/${id}${this.defaultParams}`, { headers: this.headers })
  }
}
