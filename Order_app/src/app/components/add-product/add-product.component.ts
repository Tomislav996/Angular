import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () => {
    this.addProductForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productDescription: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      productPrice: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      productCategory: new FormControl('', [Validators.required]),
      productStock: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
    });
  };

  onFormSubmit = () => {
    const {
      productName,
      productDescription,
      productPrice,
      productCategory,
      productStock,
    } = this.addProductForm.value;

    const productToAdd: Product = {
      id: this.productsService.getProductsLength(),
      name: productName,
      description: productDescription,
      price: productPrice,
      category: productCategory,
      stock: productStock,
      quantity: 0,
    };

    this.productsService.addProduct(productToAdd);

    this.addProductForm.reset();
  };
}
