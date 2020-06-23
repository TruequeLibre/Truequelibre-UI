import {Component, Input} from '@angular/core';

@Component({
  selector: 'truequelibre-item-card',
  templateUrl: './item.card.component.html',
  styleUrls: ['./item.card.component.css']
})
export class ItemCardComponent {
  @Input() picture      = 'https://via.placeholder.com/224';
  @Input() price        = '$399.900';
  @Input() title        = 'Please insert a description no longer than';
  @Input() URL          = '';
  @Input() freeShipping = true;
}
