import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { SectionStoreService } from '@shared/services/section/section-store.service';

import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./section.component.scss'],
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit {
  faAddressCard = faAddressCard;

  section = '';

  constructor(public sectionStore: SectionStoreService) {}

  ngOnInit() {}

  addSection() {
    if (this.section) {
      this.section = '';
    }
  }

}
