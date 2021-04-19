import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './Modules/dom-angular/product-list/product-list.component';

interface Product {
  code: number;
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BC_Angular';

  @ViewChild('btnAdd') tagBtnAdd: any;
  @ViewChild('tagProdList') tagList: ProductListComponent;

  addProduct(product: Product): void {
    console.log(this.tagBtnAdd.nativeElement.id);
    console.log(this.tagBtnAdd.nativeElement.className);

    this.tagBtnAdd.nativeElement.className = 'btn btn-danger';

    this.tagList.arrProducts.push(product);
  }
}
