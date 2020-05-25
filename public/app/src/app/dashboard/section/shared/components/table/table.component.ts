import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// Model
import { Student } from '@app/dashboard/shared/models';


@Component({
  selector: 'app-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @Input()
  students: Student;

  @Input()
  type: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  checkStudent(id: number) {
    this.router.navigate([`dashboard/section/student/${id}`]);
  }

}
