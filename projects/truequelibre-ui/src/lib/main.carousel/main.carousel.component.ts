import {Component, Input} from '@angular/core';

@Component({
  selector: 'truequelibre-main-carousel',
  templateUrl: './main.carousel.component.html',
  styleUrls: ['./main.carousel.component.css']
})
export class MainCarouselComponent {
  @Input() firstPicture = '';
  @Input() secondPicture = '';
  @Input() thirdPicture = '';
}
