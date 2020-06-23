import { NgModule } from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterTestingModule} from '@angular/router/testing';
import {LinkButtonComponent} from './link.button/link.button.component';
import {ItemCardComponent} from './item.card/item.card.component';
import {ClientCardComponent} from './client.card/client.card.component';
import {ProductPageCardComponent} from './product.page.card/product.page.card.component';
import {MainCarouselComponent} from './main.carousel/main.carousel.component';



@NgModule({
  declarations: [
    AlertComponent,
    BreadcrumbComponent,
    LinkButtonComponent,
    ItemCardComponent,
    ClientCardComponent,
    ProductPageCardComponent,
    MainCarouselComponent
  ],
    imports: [
        CommonModule,
        RouterTestingModule
    ],
  exports: [
    AlertComponent,
    BreadcrumbComponent,
    LinkButtonComponent,
    ItemCardComponent,
    ClientCardComponent,
    ProductPageCardComponent,
    MainCarouselComponent
  ]
})
export class TruequelibreUiModule { }
