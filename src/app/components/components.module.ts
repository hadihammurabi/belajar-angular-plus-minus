import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app.material.module';
import { TopnavComponent } from './topnav/topnav.component';

const Components = [
  TopnavComponent,
];

@NgModule({
  declarations: [
    ...Components,
  ],
  imports: [
    AppMaterialModule,
  ],
  exports: [
    ...Components,
  ],
})
export class ComponentsModule { }
