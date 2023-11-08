import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { productTableConfig } from './product-admin.config';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
})
export class ProductsAdminComponent implements OnInit {
  producList: Product[] = [];
  public configCrudItemOptions: CrudItemOptions[] = productTableConfig;
  public entity = Product; // class of new entry
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((productsFromJsonFile) => {
      this.producList = productsFromJsonFile;
      console.log(this.producList);
    });
  }
}
