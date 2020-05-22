import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Section } from '@shared/models';
import { SectionsService } from '@shared/services/section/section.service';

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

  async addSection(body: any) {

    if (body) {

      const newSection = body;

      this.sections = [
        ...this.sections,
        newSection
      ];

      console.log('list of sections', this.sections);

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

  async updateSection(body: Section) {
    const section = this.sections.find(data => data.id === body.id);

    if (section) {
      const index = this.sections.indexOf(section);

      this.sections[index] = {
        ...section,
        ...body
      };

      this.sections = [...this.sections];

      try {
        await this.sectionService
        .updateSection(body.id, body)
        .toPromise();
      } catch (e) {

        console.log(e);
        this.sections[index] = {
          ...section
        };

      }
      // end of catch
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
