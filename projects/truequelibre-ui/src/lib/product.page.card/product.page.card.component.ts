import {Component, Input} from '@angular/core';

@Component({
  selector: 'truequelibre-product-page-card',
  templateUrl: './product.page.card.component.html',
  styleUrls: ['./product.page.card.component.css']
})
export class ProductPageCardComponent {
  @Input() picture      = 'https://via.placeholder.com/224';
  @Input() price        = '$399.900';
  @Input() payments     = '36x $ 42.000';
  @Input() title        = 'Please insert a description no longer than 70 chars';
  @Input() URL          = '';
  @Input() freeShipping = true;
  @Input() small = true;
}
