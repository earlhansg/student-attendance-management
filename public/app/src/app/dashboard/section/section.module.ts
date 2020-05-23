import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { SectionRoutingModule } from './section-routing.module';
import { SharedModule } from '@app/dashboard/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
// Components
import { SectionsComponent } from './containers/sections/sections.component';
import { SectionComponent } from './containers/section/section.component';
import { SectionListComponent } from './components/section-list/section-list.component';


@NgModule({
  imports: [
    CommonModule,
    SectionRoutingModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule
  ],
  declarations: [
    SectionsComponent,
    SectionComponent,
    SectionListComponent
  ],
  providers: []
})
export class SectionModule { }
