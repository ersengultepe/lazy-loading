import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C4Component } from './c4.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    C4Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: C4Component
      }
    ])
  ]
})
export class C4Module { }
