import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './container/dashboard.component';


export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'students',
        loadChildren: () => import('./student/student.module')
        .then(mod => mod.StudentModule)
      },
      {
        path: '',
        redirectTo: 'students',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
