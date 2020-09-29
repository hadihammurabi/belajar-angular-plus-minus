import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app.material.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { StateService } from '../services/state.service';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    AppMaterialModule,
    ComponentsModule,
  ],
  providers: [
    StateService,
  ],
})
export class PagesModule { }
