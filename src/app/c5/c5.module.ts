import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C5RoutingModule } from './c5-routing.module';
import { C5Component } from './c5.component';
import { C51Component } from './c51/c51.component';


@NgModule({
  declarations: [
    C5Component,
    C51Component
  ],
  imports: [
    CommonModule,
    C5RoutingModule
  ]
})
export class C5Module { }
