import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StudentStoreService } from '@app/dashboard/student/shared/services/student/student-store.service';

import { faUser } from '@fortawesome/free-solid-svg-icons';

// Data Form
import { studentFormData } from '@app/dashboard/student/shared/data';

@Component({
  selector: 'app-student',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student.component.scss'],
  templateUrl: './student.component.html'
})
export class StudentComponent {

  faUser = faUser;
  studentFormData = studentFormData;

  constructor(public studentStore: StudentStoreService) {}

}
