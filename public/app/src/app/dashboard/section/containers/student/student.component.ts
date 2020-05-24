import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';


@Component({
  selector: 'app-student',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student.component.scss'],
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
