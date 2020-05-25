import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsComponent } from './containers/sections/sections.component';
import { SectionComponent } from './containers/section/section.component';
import { StudentComponent } from './containers/student/student.component';

export const ROUTES: Routes = [
  { path: '', component:  SectionsComponent },
  { path: ':id', component:  SectionComponent},
  { path: 'student/:id', component:  StudentComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class SectionRoutingModule {}
