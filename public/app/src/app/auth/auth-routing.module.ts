import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module')
        .then(mod => mod.LoginModule)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
