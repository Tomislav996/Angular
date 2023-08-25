import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;

  allowedCategories: string[] = ["books", "clothing", "sports", "electronics"]

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
      productPrice: new FormControl(0, [
        Validators.required,
        Validators.min(1),
      ]),
      productCategory: new FormControl('', [
        Validators.required,
        this.allowedCategoriesValidator,
      ]),
      productStock: new FormControl(0, [
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
  

  


  allowedCategoriesValidator = (control: FormControl):{[key: string]: boolean} | null => {
    const inputValue = control.value;
  
    if (inputValue && !this.allowedCategories.includes(inputValue.toLowerCase())) {
      return { invalidCategory: true };
    }
  
    return null;
  };
  
}
