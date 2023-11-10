import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ProductsAdminComponent
  extends BaseTableLoader
  implements OnInit, OnDestroy
{
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
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getProductList();
    });
    // this.handleReload(this.productService.deleteProduct(productId));
  }

  // Problem in case of multiple deletes on multiple items in the same time : old selected datas are not removed.
  // Tried to fix it with BaseTableLoader class and lazyLoaded. And  but doesn'y work. And tried with handleReload (see comment upside) but doesn'y work either

  onDelete(productsIds: number[]) {
    if (productsIds.length > 1) {
      for (const id of productsIds) {
        this.deleteProduct(id);
      }
    } else {
      return this.deleteProduct(productsIds[0]);
    }
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
