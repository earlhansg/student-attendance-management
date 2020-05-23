import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionsComponent } from './containers/sections/sections.component';

export const ROUTES: Routes = [
  { path: '', component:  SectionsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class SectionRoutingModule {}
