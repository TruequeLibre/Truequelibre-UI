import { NgModule } from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterTestingModule} from '@angular/router/testing';
import {LinkButtonComponent} from './link.button/link.button.component';



@NgModule({
  declarations: [
    AlertComponent,
    BreadcrumbComponent,
    LinkButtonComponent
  ],
    imports: [
        CommonModule,
        RouterTestingModule
    ],
  exports: [
    AlertComponent,
    BreadcrumbComponent,
    LinkButtonComponent
  ]
})
export class TruequelibreUiModule { }
