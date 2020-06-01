import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttendancesComponent } from './containers/attendances/attendances.component';
import { AttendanceComponent } from './containers/attendance/attendance.component';

export const ROUTES: Routes = [
  { path: '', component:  AttendancesComponent },
  { path: 'new', component:  AttendancesComponent },
  { path: ':id', component:  AttendancesComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class AttendanceRoutingModule {}