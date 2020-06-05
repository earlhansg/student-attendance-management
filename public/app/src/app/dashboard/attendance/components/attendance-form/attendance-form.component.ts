import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
// Service
import { AttendanceStoreService } from '@shared/services/attendance/attendance-store.service';
// Icon
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Student, ClassAttendance } from '@app/dashboard/shared/models';
@Component({
  selector: 'app-attendance-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendance-form.component.scss'],
  templateUrl: './attendance-form.component.html'
})
export class AttendanceFormComponent implements OnChanges {

  @Input()
  students: Student[];

  @Input()
  attendance: ClassAttendance[];

  faUser = faUser;
  existing = false;

  form = this.fb.group({
    date: [ new Date(), Validators.required],
    students: this.fb.array([''])
  });
  constructor(
    private fb: FormBuilder,
    private attendanceStore: AttendanceStoreService,
    private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.students) {
      this.emptyStudent();

      const value = this.students;
      this.form.patchValue(value);

      if (value) {
        for (const item of value) {
          const student = { status: false, ...item };
          this.formStudents.push(new FormControl(student));
        }
      }

    } else if (this.attendance && this.attendance[0]) {
      this.existing = true;
      this.emptyStudent();
      this.fetchExistingAttendance();

    } else {
      this.router.navigate(['dashboard/attendance']);
    }
  }

  fetchExistingAttendance() {
    const { students, date } = this.attendance[0];
    this.form.patchValue(students);

    const getDate = date.split('T')[0];
    const format = 'MM/dd/yyyy';
    const locale = 'en-US';
    const formattedDate = formatDate(getDate, format, locale);

    this.form.controls['date'].setValue(formattedDate);

    if (students) {
      for (const item of students) {
        this.formStudents.push(new FormControl(item));
      }
    }
  }

  emptyStudent() {
    while (this.formStudents.controls.length) {
      this.formStudents.removeAt(0);
    }
  }

  get formStudents() {
    return this.form.get('students') as FormArray;
  }

  addStudent() {
    this.formStudents.push(new FormControl(''));
  }

  removeStudent(index: number) {
    this.formStudents.removeAt(index);
  }

  changeStatus(values: any, id: number) {
    const status =  values.currentTarget.checked;
    this.formStudents.controls.map((item) => {
      if (item.value.id === id) {
        return Object.assign(item.value, { status });
      }
    });
  }

  onSave() {
    const { students } = this.form.value;
    const sectionId = students[0].section;
    const id = students[0].id;
    if (this.existing) {
      this.attendanceStore.updateAttendance({...this.form.value, id, sectionId });
    } else {
      this.attendanceStore.addAttendance({...this.form.value, sectionId });
    }
  }

}
