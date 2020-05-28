import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { AttendanceRoutingModule } from './attendance-routing.module';
import { SharedModule } from '@app/dashboard/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: []
})
export class AttendanceModule { }
