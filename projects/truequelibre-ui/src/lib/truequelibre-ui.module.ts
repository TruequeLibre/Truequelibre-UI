import { NgModule } from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterTestingModule} from '@angular/router/testing';
import {LinkButtonComponent} from './link.button/link.button.component';
import {ItemCardComponent} from './item.card/item.card.component';
import {ClientCardComponent} from './client.card/client.card.component';



@NgModule({
  declarations: [
    AlertComponent,
    BreadcrumbComponent,
    LinkButtonComponent,
    ItemCardComponent,
    ClientCardComponent
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
    ClientCardComponent
  ]
})
export class TruequelibreUiModule { }
