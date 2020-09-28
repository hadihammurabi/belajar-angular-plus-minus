import { NgModule } from '@angular/core';
import { MatIconModule } from  '@angular/material/icon';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatCardModule } from  '@angular/material/card';
import { MatGridListModule } from  '@angular/material/grid-list';
import { MatButtonModule } from  '@angular/material/button';

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
  ],
})
export class AppMaterialModule { }
