import { Component, ChangeDetectionStrategy,
  Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmDialogComponent } from '@app/dashboard/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnChanges, OnInit {

  @Input()
  dataForm: any;

  @Input()
  existing: any;

  @Output()
  saveFormValues = new EventEmitter();

  @Output()
  editFormValues = new EventEmitter();

  @Output()
  removeFormValues = new EventEmitter();

  form: FormGroup;
  formProps = [];

  isExist = false;

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

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
    // end of for loop
    this.form = new FormGroup(formDataObj);
  }

  ngOnChanges({existing}: SimpleChanges) {
    // if existing has a value then set initial value on it
    if (existing && existing.currentValue) {
      this.isExist = true;
      for (const prop of Object.keys(this.existing)) {
        if (prop !== 'id') {
          this.form.controls[`${prop}`].setValue(this.existing[`${prop}`]);
        }
        // end of if statement
      }
      // end of for loop
    }
    // end of if statement
  }


  mapValidator(validators) {
    if (validators) {
      return Object.keys(validators).map(validationType => {
        if (validationType === 'required' ) {
          return Validators.required;
        }});
    } else { return []; }
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.isExist) {
        const id = this.existing.id;
        const updatedValue = { ...this.form.value, id };
        this.editFormValues.emit(updatedValue);
      } else {
        this.saveFormValues.emit(this.form.value);
      }
      // end of inner if statement
    }
    // end of outer if statement
  }

  // onRemove() {
  //   this.removeFormValues.emit(this.existing.id);
  // }

  openModal() {
    const initialState = {
      message: 'remove'
    };
    this.bsModalRef = this.modalService.show(ConfirmDialogComponent,
      { initialState, class: 'modal-sm' });
    this.bsModalRef.content.title = 'remove';
    this.bsModalRef.content.event.subscribe(response => {
      if (response) {
        this.removeFormValues.emit(this.existing.id);
      }
    });
  }

}
