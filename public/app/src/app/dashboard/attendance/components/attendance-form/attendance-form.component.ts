import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
// Icon
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-attendance-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./attendance-form.component.scss'],
  templateUrl: './attendance-form.component.html'
})
export class AttendanceFormComponent {
  faUser = faUser;
  form = this.fb.group({
    date: ['', Validators.required],
    sectionId: [''],
    students: this.fb.array([''])
  });
  constructor(private fb: FormBuilder) {}

}
