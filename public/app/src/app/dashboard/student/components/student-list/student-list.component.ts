import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-student-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student-list.component.scss'],
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {

  constructor() {}

}
