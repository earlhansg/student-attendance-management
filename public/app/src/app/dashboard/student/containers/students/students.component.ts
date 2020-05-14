import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StudentStoreService } from '@app/dashboard/student/shared/services/student/student-store.service';

import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-students',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./students.component.scss'],
  templateUrl: './students.component.html'
})
export class StudentsComponent {
  faUserFriends = faUserFriends;

  constructor(public studentStore: StudentStoreService) {}

}
