import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
