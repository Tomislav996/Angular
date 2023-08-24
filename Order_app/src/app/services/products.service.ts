import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { PRODUCTS_DATA } from '../data/products-data';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  private _products: Product[] = PRODUCTS_DATA;
  private _productsInCart: Product[] = [];

  _productsSubject = new BehaviorSubject<Product[]>(this._products);

  _cartSubject = new BehaviorSubject<Product[]>(this._productsInCart);

  addProductToCart(productId: number): void {
    const productToAdd = this._products.find(
      (product) => product.id === productId
    );

    if (productToAdd) {
      const productInCart = this._productsInCart.find(
        (product) => product.id === productId
      );

      if (!productInCart) {
        this._productsInCart.push(productToAdd);
        this._cartSubject.next([...this._productsInCart]);
      }

      productToAdd.stock--;
      productToAdd.quantity++;
      this._productsSubject.next([...this._products]);
    }
  }


  reduceQuantity(productId: Number): void {
    let productFound = this._productsInCart.find(
      (product) => product.id === productId
    );
    if (productFound) {
      if (productFound.quantity === 1) {
        let productToRemove = this._productsInCart.indexOf(productFound);
        this._productsInCart.splice(productToRemove, 1);

        this._cartSubject.next([...this._productsInCart]);
      }
      productFound.stock++;
      productFound.quantity--;

      this._productsSubject.next([...this._products]);
    }
  }
  
  
  increaseQuantity(productId: Number) {
    let productFound = this._productsInCart.find(
      (product) => product.id === productId
    );
    if (productFound) {
      if (productFound.stock === 0) {
        return;
      }
      productFound.stock--;
      productFound.quantity++;

      this._cartSubject.next([...this._productsInCart]);
    }
  }

  getTotal() {
    let total = 0;
    for (let product of this._productsInCart) {
      total += product.price * product.quantity;
    }

    return total.toFixed(2);
  }

  addProduct(product: Product): void{
    this._products.push(product)
    this._productsSubject.next([...this._products]);
  }

  getProductsLength(): number {
     return this._products.length + 1
  }


}
