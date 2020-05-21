import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./section.component.scss'],
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
