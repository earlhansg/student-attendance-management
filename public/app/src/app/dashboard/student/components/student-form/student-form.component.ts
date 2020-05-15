import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./student-form.component.scss'],
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent implements OnInit {

  @Input()
  dataForm: any;

  form: FormGroup;
  formProps = [];

  constructor() {}

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.dataForm)) {
      formDataObj[prop] = new FormControl(this.dataForm[prop].value,
      this.mapValidator(this.dataForm[prop].validators));

      this.formProps.push({
        key: prop,
        label: this.dataForm[prop].label,
        type: this.dataForm[prop].type,
        options: this.dataForm[prop].options
      });
    }
    this.form = new FormGroup(formDataObj);
  }


  mapValidator(validators) {
    if (validators) {
      return Object.keys(validators).map(validationType => {
        if (validationType === 'required' ) {
          return Validators.required;
        } else if (validationType === 'min' ) {
          return Validators.min(validators[validationType]);
      }});
    } else { return []; }
  }

}
