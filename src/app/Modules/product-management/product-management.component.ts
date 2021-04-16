import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  form: any = {
    code: '',
    name: '',
    price: '',
  };

  products: any[] = [];
  total: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addProduct() {
    console.log(this.form);
    this.products.push(...this.form);
    this.total = this.products.reduce(
      (total, product) => (total += +product.price),
      0
    );
  }
}
