import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { DashboardModule } from '@app/dashboard/dashboard.module';
import { AppRoutingModule } from '@app/app-routing.module';
// Components
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://localhost:3000' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
