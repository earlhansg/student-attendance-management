import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

// Data Form
import { studentFormData } from '@app/dashboard/student/shared/data';

@Component({
  selector: 'app-student-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student-form.component.scss'],
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent implements OnInit {

  studentFormData = studentFormData;

  constructor() {}

  ngOnInit() {}

}
