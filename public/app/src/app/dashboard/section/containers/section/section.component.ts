import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Service
import { SectionStoreService } from '@shared/services/section/section-store.service';
import { StudentStoreService } from '@app/dashboard/shared/services/student/student-store.service';
// Model
import { Section, Student } from '@shared/models';
// RXJS
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./section.component.scss'],
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit {

  faAddressCard = faAddressCard;

  section$: Observable<Section>;
  students$: Observable<Student[]>;

  constructor(
    public sectionStore: SectionStoreService,
    public studentStore: StudentStoreService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.section$ = this.route.params
      .pipe(switchMap(param => this.sectionStore.getSection(param.id)));
    this.students$ = this.route.params
      .pipe(switchMap(param => this.studentStore.getSectionById(param.id)));
  }

}
