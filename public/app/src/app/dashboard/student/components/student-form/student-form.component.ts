import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Data Form
import { studentFormData } from '@app/dashboard/student/shared/data';
// Store
import { StudentStoreService } from '@shared/services/student/student-store.service';
// Service
import { StudentService } from '@shared/services/student/student.service';
// RXJS
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// Model
import { Student } from '@shared/models';
// Icon
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-student-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student-form.component.scss'],
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent implements OnInit {

  faUser = faUser;

  studentFormData = studentFormData;

  student$: Observable<Student>;

  constructor(
    private route: ActivatedRoute,
    public studentStore: StudentStoreService,
    private studentService: StudentService) {}

  ngOnInit() {
    this.student$ = this.route.params
      .pipe(switchMap(param => this.studentService.getStudentById(param.id)));
  }

  onsaveFormValues(event) {
    this.studentStore.addStudent(event);
  }

  oneditFormValues(event: Student) {
    this.studentStore.updateStudent(event);
  }

  onremoveFormValues(id: number) {
    this.studentStore.removeStudent(id);
  }

}
