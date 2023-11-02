import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service.js';

@NgModule({
  declarations: [ProductsAdminComponent, ProductsComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ProductService],
  exports: [ProductsAdminComponent, ProductsComponent],
})
export class ProductModule {}
