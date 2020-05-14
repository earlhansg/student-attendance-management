import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './containers/students/students.component';

export const ROUTES: Routes = [
  { path: '', component:  StudentsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class StudentRoutingModule {}
