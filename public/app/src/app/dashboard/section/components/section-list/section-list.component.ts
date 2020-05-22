import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// Models
import { Section } from '@shared/models';

import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
// Custom Dialog
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-section-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./section-list.component.scss'],
  templateUrl: './section-list.component.html'
})
export class SectionListComponent {
  faTrash = faTrash;
  faEdit = faEdit;

  @Input()
  sections: Section[];

  @Output()
  update =  new EventEmitter();

  @Output()
  remove =  new EventEmitter();

  model = [];
  isEdit = [false];

  bsModalRef: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService) {}

  save(id, name) {
    this.update.emit({id, name});
  }

  openModal(id: number) {
    const initialState = {
      message: 'remove'
    };
    this.bsModalRef = this.modalService.show(ConfirmDialogComponent,
      { initialState, class: 'modal-sm' });
    this.bsModalRef.content.title = 'remove';
    this.bsModalRef.content.event.subscribe(response => {
      if (response) {
        this.remove.emit(id);
      }
    });
  }

}
