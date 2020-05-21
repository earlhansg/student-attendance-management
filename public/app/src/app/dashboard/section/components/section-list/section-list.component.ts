import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
// Models
import { Section } from '@shared/models';

import { faTrash, faEdit, faAddressCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-section-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./section-list.component.scss'],
  templateUrl: './section-list.component.html'
})
export class SectionListComponent {
  faTrash = faTrash;
  faEdit = faEdit;
  faAddressCard = faAddressCard;

  @Input()
  sections: Section[];

  constructor(private router: Router) {}

}
