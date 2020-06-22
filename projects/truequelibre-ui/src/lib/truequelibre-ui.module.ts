import { NgModule } from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {RouterTestingModule} from '@angular/router/testing';



@NgModule({
  declarations: [
    AlertComponent,
    BreadcrumbComponent
  ],
    imports: [
        CommonModule,
        RouterTestingModule
    ],
  exports: [
    AlertComponent,
    BreadcrumbComponent
  ]
})
export class TruequelibreUiModule { }
