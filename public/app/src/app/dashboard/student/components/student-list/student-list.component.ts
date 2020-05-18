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

  @Input()
  sections: Section[];

  constructor() {}

  getSectionName(id) {
    if (this.sections) {
      return this.sections.filter(section => section.id === parseInt(id, 10))[0];
    }
  }

}
