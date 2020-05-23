import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { SectionStoreService } from '@shared/services/section/section-store.service';


@Component({
  selector: 'app-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./section.component.scss'],
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit {

  constructor(public sectionStore: SectionStoreService) {}

  ngOnInit() {}

}
