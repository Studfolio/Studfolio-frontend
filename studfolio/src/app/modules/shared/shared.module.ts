import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContainerComponent } from './app-container/app-container.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from "../../app-routing.module";



@NgModule({
  declarations: [AppContainerComponent, HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppContainerComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
