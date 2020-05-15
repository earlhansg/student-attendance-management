import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './containers/students/students.component';
import { StudentComponent } from './containers/student/student.component';

export const ROUTES: Routes = [
  { path: '', component:  StudentsComponent },
  { path: 'new', component:  StudentComponent },
  { path: ':id', component:  StudentComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class StudentRoutingModule {}
