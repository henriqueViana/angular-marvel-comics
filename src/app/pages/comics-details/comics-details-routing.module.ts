import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsDetailsComponent } from './comics-details.component';

const routes: Routes = [
  {
    path: '',
    component: ComicsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsDetailsRoutingModule { }