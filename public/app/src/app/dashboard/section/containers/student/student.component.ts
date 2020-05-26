import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// Icon
import { faUser } from '@fortawesome/free-solid-svg-icons';
// Data
import { months } from '@app/dashboard/section/shared/data';

const attendanceByStudent = {
    id: 1,
    idNumber: 22222111,
    firstName: 'Earl',
    lastName: 'Genoso',
    gender: 'M',
    section: 1,
    attendance: [
      {
        id: 1,
        date: '2020-05-01T23:28:56.782Z'
      },
      {
        id: 2,
        date: '2020-05-02T23:28:56.782Z'
      }
    ]
};



@Component({
  selector: 'app-student',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student.component.scss'],
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  faUser =  faUser;

  months = months;

  presentDay: [];

  constructor() {}

  ngOnInit() {
    // attendanceByStudent.attendance.f
  }

}
