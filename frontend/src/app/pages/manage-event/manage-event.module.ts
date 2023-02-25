import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEventRoutingModule } from './manage-event-routing.module';
import { ManageEventComponent } from './manage-event.component';


@NgModule({
  declarations: [
    ManageEventComponent
  ],
  imports: [
    CommonModule,
    ManageEventRoutingModule
  ]
})
export class ManageEventModule { }
