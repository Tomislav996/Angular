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

 orderedProducts: Product[] = [];
 total: number | string = 0

 ngOnInit(): void {
  this.productsService._cartSubject.subscribe(cartProducts => {
    this.orderedProducts = cartProducts;
    this.total = this.productsService.getTotal()
  })
 }

 productToReduce(productId: Number){
  this.productsService.reduceQuantity(productId)
  this.total = this.productsService.getTotal()
 }

 productToIncrease(productId: Number){
  this.productsService.increaseQuantity(productId)
  this.total = this.productsService.getTotal()
 }


}
