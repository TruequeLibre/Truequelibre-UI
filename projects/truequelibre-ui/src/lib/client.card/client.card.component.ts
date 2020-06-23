import {Component, Input} from '@angular/core';
import {Product} from './entities/product';

@Component({
  selector: 'truequelibre-client-card',
  templateUrl: './client.card.component.html',
  styleUrls: ['./client.card.component.css']
})
export class ClientCardComponent {
  @Input() bannerPicture       = '';
  @Input() clientPicture       = '';
  @Input() clientName          = '';
  @Input() storeURL            = '';
  @Input() products: Product[] = [];
}
