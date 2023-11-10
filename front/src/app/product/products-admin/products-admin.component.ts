import { Component, OnInit } from '@angular/core';
import { BaseTableLoader } from 'app/shared/ui/table/base-table-loader.class';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { productTableConfig } from './product-admin.config';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
})
export class ProductsAdminComponent extends BaseTableLoader implements OnInit {
  producList: Product[] = [];
  public configCrudItemOptions: CrudItemOptions[] = productTableConfig;
  public entity = Product; // class of new entry
  error = null;
  private errorSub: Subscription;

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    this.errorSub = this.productService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.getProductList();
  }
  getProductList() {
    this.productService.getProductList().subscribe((productsData) => {
      this.producList = productsData;
    });
  }

  deleteProduct(productId: number) {
    console.log('id of one product' + productId);

    this.productService.deleteProduct(productId).subscribe((data) => {
      console.log(data);
      this.getProductList();
    });
    // this.handleReload(this.productService.deleteProduct(productId));
  }

  deleteProducts(productIds: number[]) {
    let idsToDelete = [...productIds];
    for (const id of idsToDelete) {
      this.deleteProduct(id);
    }
    idsToDelete = [];
  }
  // Problem in case of multiple deletes on multiple items in the same time : old selected datas are not removed.
  // Tried to fix it with BaseTableLoader class and lazyLoaded. And  but doesn'y work. And tried with handleReload (see comment upside) but doesn'y work either

  onDelete(event: number[]) {
    if (event.length > 1) {
      console.log(event);
      return this.deleteProducts(event);
    } else {
      return this.deleteProduct(event[0]);
    }
  }
}
