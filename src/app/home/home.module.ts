import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EshopComponent } from './eshop/eshop.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    EshopComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    EshopComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
