import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsApiService} from '../../services/products-api.service'
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  loading: boolean = true;
  public product?: IProduct;
  private _routerActive = inject(ActivatedRoute);
  private _apirService = inject(ProductsApiService);

  ngOnInit(): void {
      this._routerActive.params.subscribe(params => {
        this._apirService.getProductById(params['productId']).subscribe((data: IProduct) => {
          console.log(data);
          this.product = data;
          this.loading = false;
        })
      })
  }
}
