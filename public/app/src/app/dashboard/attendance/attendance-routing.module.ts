import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttendancesComponent } from './containers/attendances/attendances.component';

export const ROUTES: Routes = [
  { path: '', component:  AttendancesComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class AttendanceRoutingModule {}
