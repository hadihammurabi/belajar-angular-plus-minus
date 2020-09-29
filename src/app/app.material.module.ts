import { NgModule } from '@angular/core';
import { MatIconModule } from  '@angular/material/icon';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatCardModule } from  '@angular/material/card';
import { MatGridListModule } from  '@angular/material/grid-list';
import { MatButtonModule } from  '@angular/material/button';

const MaterialModules = [
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
];

@NgModule({
  imports: [
    ...MaterialModules,
  ],
  exports: [
    ...MaterialModules,
  ],
})
export class AppMaterialModule { }
