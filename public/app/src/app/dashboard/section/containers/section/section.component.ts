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
      const name = this.section;
      this.sectionStore.addSection({ name });
      this.section = '';
    }
  }

  onUpdate(event) {
    this.sectionStore.updateSection(event);
  }

}
