import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { AppMaterialModule } from "../../app-material.module";


@NgModule({
  declarations: [AuthComponent, LoginComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        AppMaterialModule
    ]
})
export class AuthModule { }
