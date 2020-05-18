import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Data Form
import { studentFormData } from '@app/dashboard/student/shared/data';
// Store
import { StudentStoreService } from '@app/dashboard/student/shared/services/student/student-store.service';
// Service
import { StudentService } from '@app/dashboard/student/shared/services/student/student.service';
// RXJS
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// Model
import { Student } from '@app/dashboard/student/shared/models';
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
    private router: Router,
    private route: ActivatedRoute,
    public studentStore: StudentStoreService,
    private studentService: StudentService) {}

  ngOnInit() {
    this.student$ = this.route.params
      .pipe(switchMap(param => this.studentService.getStudentById(param.id)));
  }

  onsaveFormValues(event) {
    this.studentStore.addStudent(event);
    this.router.navigate(['dashboard']);
  }

  oneditFormValues(event: Student) {
    // console.log(event);
    this.studentService.updateStudent(event.id, event);
  }

}
