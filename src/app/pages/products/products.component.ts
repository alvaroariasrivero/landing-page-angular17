import { Component, inject, OnInit } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: IProduct[] = []
  private _apiService = inject(ProductsApiService);
  private _router = inject(Router)

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
    })
  }

  navigate(productId: number){
    this._router.navigate(['/product', productId])
  }

}
