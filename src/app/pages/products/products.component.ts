import { Component, inject, OnInit } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: any[] = []
  private _apiService = inject(ProductsApiService);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: any[]) => {
      console.log(data);
      
      this.productList = data;
    })
  }

}
