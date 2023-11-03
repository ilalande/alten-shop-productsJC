import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from './utils/primeng/primeng.module';
import { ListComponent } from './ui/list/list.component';
import { ListService } from './ui/list/list.service';

@NgModule({
  declarations: [ListComponent],
  providers: [ListService],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  exports: [PrimeNGModule, ListComponent],
})
export class SharedModule {}
