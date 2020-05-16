import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StudentStoreService } from '@app/dashboard/student/shared/services/student/student-store.service';

import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-student',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student.component.scss'],
  templateUrl: './student.component.html'
})
export class StudentComponent {

  faUser = faUser;

  constructor(public studentStore: StudentStoreService) {}

}
