import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ProductComponent } from '../product/product.component';

interface Product {
  code: number;
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  arrProducts: Product[] = [
    {
      code: 1,
      name: 'iPhone X',
      image: 'https://picsum.photos/200',
      price: 1000,
    },
    {
      code: 2,
      name: 'iPhone XR',
      image: 'https://picsum.photos/200',
      price: 800,
    },
    {
      code: 3,
      name: 'iPhone XSMAX',
      image: 'https://picsum.photos/200',
      price: 1500,
    },
  ];

  @ViewChildren(ProductComponent) listTag: QueryList<ProductComponent>;
  constructor() {}

  ngOnInit(): void {}

  changePrice() {
    const arrTagProduct = this.listTag.toArray();

    // arrTagProduct[1].product.price = 5000;
    this.listTag.forEach((item: ProductComponent, index: number) => {
      if (item.product.code === 2) {
        item.product.price = 1000;
      }
    });
  }
}
