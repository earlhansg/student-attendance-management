import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { StudentStoreService } from '@shared/services/student/student-store.service';
import { SectionStoreService } from '@shared/services/section/section-store.service';

import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-students',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./students.component.scss'],
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit {
  faUserFriends = faUserFriends;

  constructor(
    public studentStore: StudentStoreService,
    public sectionStore: SectionStoreService) {}

  ngOnInit() {}

}
