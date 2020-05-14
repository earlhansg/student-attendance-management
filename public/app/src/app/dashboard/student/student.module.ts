import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '@app/dashboard/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Components
import { StudentsComponent } from './containers/students/students.component';
import { StudentListComponent } from './components/student-list/student-list.component';
// Services
import { StudentService } from './shared/services/student/student.service';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [
    StudentsComponent,
    StudentListComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule { }
