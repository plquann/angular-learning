import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DataBindingModule } from './Modules/data-binding/data-binding.module';
import { DirectivesModule } from './Modules/directives/directives.module';
import { DomAngularModule } from './Modules/dom-angular/dom-angular.module';
import { InteractionModule } from './Modules/interaction/interaction.module';
import { LayoutPracticeModule } from './Modules/layout-practice/layout-practice.module';
import { ProductManagementModule } from './Modules/product-management/product-management.module';

@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule,
    LayoutPracticeModule,
    DataBindingModule,
    DirectivesModule,
    ProductManagementModule,
    InteractionModule,
    DomAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
