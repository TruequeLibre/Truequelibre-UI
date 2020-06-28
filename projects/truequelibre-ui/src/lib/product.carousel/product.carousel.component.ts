import {Component, Input} from '@angular/core';

@Component({
  selector: 'truequelibre-product-carousel',
  templateUrl: './product.carousel.component.html',
  styleUrls: ['./product.carousel.component.css']
})
export class ProductCarouselComponent {
  @Input() elements: string[];
  currentIndex = 0;

  onClick(evt: MouseEvent, itemIndex: number){
    const indicators: NodeListOf<Element> = document.querySelectorAll('li.carousel-indicators-items');
    const carouselItems: NodeListOf<Element> = document.querySelectorAll('#carouselExampleCaptions .carousel-item');

    Array.from(indicators).forEach((el) => {
      el.className = 'carousel-indicators-items';
    });

    Array.from(carouselItems).forEach((el) => {
      el.className = 'carousel-item';
    });

    indicators.item(itemIndex).className = 'carousel-indicators-items active';

    carouselItems
      .item(itemIndex)
      .className = 'carousel-item active';
  }

  enableThumbnail(right: boolean){
    const indicators: HTMLCollectionOf<Element> =
      document.getElementsByClassName('carousel-indicators-items');

    Array.from(indicators).forEach((el) => {
      el.className = 'carousel-indicators-items';
    });

    if (right){
      if ((this.currentIndex + 1) > (indicators.length - 1)){
        this.currentIndex = -1;
      }

      indicators
        .item(++this.currentIndex)
        .className = 'carousel-indicators-items active';
    } else {
      if ((this.currentIndex - 1) === -1){
        this.currentIndex = indicators.length;
      }

      indicators
        .item(--this.currentIndex)
        .className = 'carousel-indicators-items active';
    }
  }
}
