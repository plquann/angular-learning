import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from 'src/app/layout-practice/content/content.component';
import { FooterComponent } from 'src/app/layout-practice/footer/footer.component';
import { HeaderComponent } from 'src/app/layout-practice/header/header.component';
import { LayoutPracticeComponent } from 'src/app/layout-practice/layout-practice.component';
import { SlideBarComponent } from 'src/app/layout-practice/slide-bar/slide-bar.component';

@NgModule({
  declarations: [
    LayoutPracticeComponent,
    HeaderComponent,
    ContentComponent,
    SlideBarComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    LayoutPracticeComponent,
    HeaderComponent,
    ContentComponent,
    SlideBarComponent,
    FooterComponent,
  ],
})
export class LayoutPracticeModule {}
