import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module')
        .then(mod => mod.LoginModule)
      }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ]
})
export class AuthRoutingModule {}
