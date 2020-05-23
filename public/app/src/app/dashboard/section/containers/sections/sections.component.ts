import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { SectionStoreService } from '@shared/services/section/section-store.service';

import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sections',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sections.component.scss'],
  templateUrl: './sections.component.html'
})
export class SectionsComponent implements OnInit {
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

  onRemove(event) {
    this.sectionStore.removeSection(event);
  }

}
