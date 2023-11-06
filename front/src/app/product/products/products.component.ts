import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  producList: Product[] = [];
  sortOptions: SelectItem[];
  sortOrder: number;

  sortField: string;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((productsFromJsonFile) => {
      this.producList = productsFromJsonFile.data;
    });
    this.sortOptions = [
      { label: 'Price High to Low', value: 'desc-price' },
      { label: 'Price Low to High', value: 'asc-price' },
    ];
    this.sortField = 'name';
  }
}
