import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C5Component } from './c5.component';

const routes: Routes = [{ path: '', component: C5Component },
{
  path: "",
  component: C5Component
}];

//www.taner.com/c5

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C5RoutingModule { }
