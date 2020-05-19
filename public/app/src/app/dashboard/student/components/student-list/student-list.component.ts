import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
// Models
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

  constructor(private router: Router) {}

  getSectionName(id) {
    if (this.sections) {
      return this.sections.filter(section => section.id === parseInt(id, 10))[0];
    }
  }

  updateStudent(id: number) {
    this.router.navigateByUrl(`dashboard/students/${id}`);
  }

}
