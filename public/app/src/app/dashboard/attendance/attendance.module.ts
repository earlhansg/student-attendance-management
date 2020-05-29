import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { AttendanceRoutingModule } from './attendance-routing.module';
import { SharedModule } from '@app/dashboard/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Components
import { AttendancesComponent } from './containers/attendances/attendances.component';
import { AttendanceComponent } from './containers/attendance/attendance.component';



@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [
    AttendancesComponent,
    AttendanceComponent
  ]
})
export class AttendanceModule { }
