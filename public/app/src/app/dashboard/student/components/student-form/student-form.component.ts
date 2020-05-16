import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

// Data Form
import { studentFormData } from '@app/dashboard/student/shared/data';

// Store
import { StudentStoreService } from '@app/dashboard/student/shared/services/student/student-store.service';

@Component({
  selector: 'app-student-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student-form.component.scss'],
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent implements OnInit {

  studentFormData = studentFormData;

  constructor(public studentStore: StudentStoreService) {}

  ngOnInit() {}

  onsaveFormValues(event) {
    this.studentStore.addStudent(event);
  }

}
