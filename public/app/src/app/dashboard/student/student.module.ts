import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '@app/dashboard/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { StudentsComponent } from './containers/students/students.component';
import { StudentComponent } from './containers/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { FormComponent } from './shared/components/form/form.component';
// Services
import { StudentService } from './shared/services/student/student.service';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    StudentFormComponent,
    FormComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule { }
