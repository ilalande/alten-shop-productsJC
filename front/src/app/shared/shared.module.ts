import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from './utils/primeng/primeng.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  exports: [PrimeNGModule],
})
export class SharedModule {}
