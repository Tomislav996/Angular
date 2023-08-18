import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { PRODUCTS_DATA } from '../data/products-data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  private _products: Product[] = PRODUCTS_DATA
  private _productsInCart: Product[] = []

  getProducts(): Product[]{
    return this._products;
  }

  addProductToCart(productToAdd: Product): void{
   let productFound = this._productsInCart.find((product) => product === productToAdd)
   if(!productFound){
    this. _productsInCart.push(productToAdd)
   }
   productToAdd.stock --
   productToAdd.quantity ++

  }

  reduceQuantity(productId: Number):void{
    let productFound = this._products.find((product)=> product.id === productId)
    if(productFound){
      if( productFound.quantity === 1){
        let productToRemove = this._productsInCart.indexOf(productFound)
        this._productsInCart.splice(productToRemove,1)
      }
      productFound.stock ++
      productFound.quantity --
    }
  }


  increaseQuantity(productId: Number){
    let productFound = this._products.find((product)=> product.id === productId)
    if(productFound){
      if( productFound.stock === 0 ){
        return
      }
      productFound.stock --
      productFound.quantity ++
    }
  }

  getProductsInCart(){
    return this._productsInCart
  }

  getTotal(){
    let total = 0
    for (let product of this._productsInCart){
      total += product.price * product.quantity
    }

    return total
  }


}
