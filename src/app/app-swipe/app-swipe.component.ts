import { Component } from '@angular/core';
import { Indicator, IndicatorAnimations } from './../indicator';

@Component({
  selector: 'app-swipe',
  templateUrl: './app-swipe.component.html',
  styleUrls: [ './app-swipe.component.scss' ],
  animations: IndicatorAnimations
})
export class AppSwipeComponent {
  eventText = '';
  indicators;

  constructor() {
    this.indicators = new Indicator();
  }
  onPan(evt) {
    this.eventText += `(${evt.center.x}, ${evt.center.y})<br/>`;
      const indicator = this.indicators.display(
      evt.center.x,
      evt.center.y,
      50
    );
    this.indicators.hide(indicator);
  }
}
