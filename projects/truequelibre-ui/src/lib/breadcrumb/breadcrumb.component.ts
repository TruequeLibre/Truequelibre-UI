import {Component, Input} from '@angular/core';

@Component({
  selector: 'truequelibre-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() categories: {categoryName: string; categoryUrl: string}[] = [];
}
