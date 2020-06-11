import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Component
import { DashboardComponent } from './container/dashboard.component';
// Guard
import { AuthGuard } from '@app/auth/shared/guard/auth.guard';


export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
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
      {
        path: 'section',
        loadChildren: () => import('./section/section.module')
        .then(mod => mod.SectionModule)
      },
      {
        path: 'attendance',
        loadChildren: () => import('./attendance/attendance.module')
        .then(mod => mod.AttendanceModule)
      },
      {
        path: '**',
        redirectTo: 'students'
      }
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
