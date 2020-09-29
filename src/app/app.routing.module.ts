import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
