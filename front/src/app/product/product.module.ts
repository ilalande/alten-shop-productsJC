import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsAdminComponent, ProductsComponent],
  imports: [CommonModule, HttpClientModule, SharedModule, FormsModule],
  providers: [ProductService],
  exports: [ProductsAdminComponent, ProductsComponent],
})
export class ProductModule {}
