import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-students',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['students.component.scss'],
  templateUrl: './students.component.html'
})
export class StudentsComponent {

  constructor() {}

}
