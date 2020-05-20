import { Component, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
// import { fawarn } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['confirm-dialog.component.scss'],
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
  message: string;

  event: EventEmitter<any> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {
  }

  confirm() {
    this.bsModalRef.hide();
    this.event.emit(true);
  }

  decline() {
    this.bsModalRef.hide();
    this.event.emit(false);
  }

}
