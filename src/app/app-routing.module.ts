import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {//www.tanersaydam.com/c1/
    path: "c1",
    loadChildren: () => import("./c1/c1.module").then(m => m.C1Module)
  },
  {
    path: "c2",
    loadChildren: () => import("./c2/c2.module").then(m => m.C2Module)
  },
  {
    path: "c3",
    loadChildren: () => import("./c3/c3.module").then(m => m.C3Module)
  },
  {
    path: "c4",
    loadChildren: () => import("./c4/c4.module").then(m => m.C4Module)
  },
  { 
    path: 'c5', 
    loadChildren: () => import('./c5/c5.module').then(m => m.C5Module) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
