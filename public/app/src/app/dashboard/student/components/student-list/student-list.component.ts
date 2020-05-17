import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Student, Section } from '@app/dashboard/student/shared/models';

@Component({
  selector: 'app-student-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student-list.component.scss'],
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {

  @Input()
  students: Student[];

  constructor() {}

}
