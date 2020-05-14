import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { StudentsComponent } from './containers/students/students.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentsComponent
  ]
})
export class StudentModule { }
