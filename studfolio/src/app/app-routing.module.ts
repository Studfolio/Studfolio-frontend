import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContainerComponent } from "./modules/shared/app-container/app-container.component";
import { UserDashboardComponent } from "./modules/user/components/user-dashboard/user-dashboard.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user/dashboard',
      },
      {
        path: 'user/dashboard',
        component: UserDashboardComponent,
        canActivate: [AuthGuard],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
