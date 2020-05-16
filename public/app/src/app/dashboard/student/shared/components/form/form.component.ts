import { Component, ChangeDetectionStrategy, OnInit,
  Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  @Input()
  dataForm: any;

  @Output()
  saveFormValues = new EventEmitter();

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

  onSubmit() {
    if (this.form.valid) {
      this.saveFormValues.emit(this.form.value);
    }
  }

}
