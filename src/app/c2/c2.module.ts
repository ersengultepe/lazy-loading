import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from './c2.component';
import { RouterModule } from '@angular/router';
import { C1Component } from '../c1/c1.component';



@NgModule({
  declarations: [
    C2Component,    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: C2Component
      }
    ])
  ]
})
export class C2Module { }
