import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'truequelibre-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements AfterViewInit{
  @Input() text = 'please insert some text';
  @Input() color = 'primary';
  @Input() destroyable = false;
  @Input() durationTime = 0;

  constructor(private host: ElementRef<HTMLElement>) { }

  destroyComponent(){
    this.host.nativeElement.remove();
  }

  ngAfterViewInit(): void {
    if (this.durationTime !== 0) {
      setTimeout(() => { this.destroyComponent(); }, this.durationTime);
    }
  }
}
