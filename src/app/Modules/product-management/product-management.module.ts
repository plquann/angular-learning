import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductManagementComponent],

  imports: [CommonModule, FormsModule],
  exports: [ProductManagementComponent],
})
export class ProductManagementModule {

}
