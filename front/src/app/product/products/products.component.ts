import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  producList: Product[] = [];
  // sortOptions: SelectItem[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((productsFromJsonFile) => {
      this.producList = productsFromJsonFile.data;
    });
    // this.sortOptions = [
    //   { label: 'Price High to Low', value: 'price' },
    //   { label: 'Price Low to High', value: 'price' },
    // ];
  }
}
