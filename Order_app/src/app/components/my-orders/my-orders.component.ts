import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit, DoCheck {

  constructor(private readonly productsService: ProductsService){

  }

 orderedProducts: Product[] = [];
 total: number | string = 0

 ngOnInit(): void {
   this.orderedProducts = this.productsService.getProductsInCart()
 }

 productToReduce(product: Product){
  this.productsService.reduceQuantity(product)
 }

 productToIncrease(product: Product){
  this.productsService.increaseQuantity(product)
 }

 ngDoCheck(): void {
    this.total =  this.productsService.getTotal().toFixed(2)
 }

}
