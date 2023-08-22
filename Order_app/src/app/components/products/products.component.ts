import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private readonly productsService: ProductsService){}

  products: Product[] = [];

  ngOnInit() {
    this.productsService._productsSubject.subscribe(mainProducts => {
      this.products = mainProducts;
    })
  }

  addProductToCart(productToAdd:  number){
    this.productsService.addProductToCart(productToAdd)
  }
}
