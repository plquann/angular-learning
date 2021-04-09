import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DataBindingModule } from './Modules/data-binding/data-binding.module';
import { LayoutPracticeModule } from './Modules/layout-practice/layout-practice.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule, 
    LayoutPracticeModule,
    DataBindingModule,
  ],
  providers: [],
  bootstrap: [AppComponent, DemoComponent]
})
export class AppModule { }
