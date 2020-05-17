import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Section } from '@app/dashboard/student/shared/models';
import { SectionsService } from '@app/dashboard/student/shared/services/section/section.service';

@Injectable({providedIn: 'root'})
export class SectionStoreService {


  constructor(private sectionService: SectionsService) {
    this.fetchAll();
  }

  private readonly SECTIONS = new BehaviorSubject<Section[]>([]);

  // Expose the observable$ part of the sections subject (read only stream)
  readonly sections$ = this.SECTIONS.asObservable();

  // the getter will return the last value emitted in SECTIONS subject
  get sections(): Section[] {
    return this.SECTIONS.getValue();
  }


  // assigning a value to this.sections will push it onto the observable
  // and down to all of its subsribers (ex: this.sections = [])
  set sections(val: Section[]) {
    this.SECTIONS.next(val);
  }

  async addSection(body: Section) {

    if (body) {

      // const dbId = 100;
      const newSection = {...body};

      this.sections = [
        ...this.sections,
        newSection
      ];

      try {
        const section = await this.sectionService
          .createSection(body)
          .toPromise();

        // we swap the local section record with the record from the server (id must be updated)
        const index = this.sections.indexOf(this.sections.find(data => data.id === body.id));
        this.sections[index] = {
          ...section
        };
        this.sections = [...this.sections];
      } catch (e) {
        // is server sends back an error, we revert the changes
        console.error(e);
        this.removeSection(body.id, false);
      }

    }

  }

  async removeSection(id: any, serverRemove = true) {
    // optimistic update
    const section = this.sections.find(data => data.id === id);
    this.sections = this.sections.filter(data => data.id !== id);

    if (serverRemove) {
      try {
        await this.sectionService.removeSection(id).toPromise();
      } catch (e) {
        console.error(e);
        this.sections = [...this.sections, section];
      }
    }

  }

  async fetchAll() {
    this.sections = await this.sectionService.getSections().toPromise();
  }

}
