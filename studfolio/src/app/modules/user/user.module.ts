import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from "../../app-material.module";

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class UserModule { }
