import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionComponent } from './containers/section/section.component';

export const ROUTES: Routes = [
  { path: '', component:  SectionComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class SectionRoutingModule {}
