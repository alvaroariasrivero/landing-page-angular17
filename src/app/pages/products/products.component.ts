import { Component, inject, OnInit } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: IProduct[] = []
  private _apiService = inject(ProductsApiService);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
    })
  }

}
