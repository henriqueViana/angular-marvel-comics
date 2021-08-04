import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsDetailsComponent } from './comics-details.component'
import { ComicsDetailsRoutingModule } from './comics-details-routing.module'

@NgModule({ 
  imports: [CommonModule, ComicsDetailsRoutingModule],
  declarations: [ComicsDetailsComponent],
})
export class ComicsDetailsModule {}