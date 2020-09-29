import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app.material.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    AppMaterialModule,
    ComponentsModule,
  ],
})
export class PagesModule { }
