import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app.material.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    AppMaterialModule,
    ComponentsModule,
  ],
})
export class PagesModule { }
