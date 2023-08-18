import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  constructor(private readonly productsService: ProductsService){
  }

 orderedProducts: Product[] = []

 ngOnInit(): void {
   this.orderedProducts = this.productsService.getProductsInCart()
 }

 productToReduce(product: Product){
  this.productsService.reduceQuantity(product)
 }

 productToIncrease(product: Product){
  this.productsService.increaseQuantity(product)
 }
}
