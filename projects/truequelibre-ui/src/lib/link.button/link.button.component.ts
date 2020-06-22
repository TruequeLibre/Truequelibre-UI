import {Component, Input} from '@angular/core';

@Component({
  selector: 'truequelibre-link-button',
  templateUrl: './link.button.component.html',
  styleUrls: ['link.button.component.css']
})
export class LinkButtonComponent {
  @Input() text    = 'please insert something';
  @Input() color   = 'primary';
  @Input() outline = false;
  @Input() block   = false;
  @Input() size    = 'sm';
  @Input() URL     = '';
}
