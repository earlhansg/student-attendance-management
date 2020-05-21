import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { SectionRoutingModule } from './section-routing.module';
import { SharedModule } from '@app/dashboard/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { SectionComponent } from './containers/section/section.component';
import { SectionListComponent } from './components/section-list/section-list.component';


@NgModule({
  imports: [
    CommonModule,
    SectionRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [
    SectionComponent,
    SectionListComponent
  ],
  providers: []
})
export class SectionModule { }
