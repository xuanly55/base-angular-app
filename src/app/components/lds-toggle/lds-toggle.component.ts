import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'lds-toggle',
  templateUrl: './lds-toggle.component.html',
  styleUrls: ['./lds-toggle.component.scss']
})
export class LdsToggleComponent implements OnInit, OnChanges {
  @Input() value;

  isOn: boolean;

  constructor() { }

  ngOnInit() {
    this.isOn = this.value;
  }

  ngOnChanges() {
    this.isOn = this.value;
  }

  toggle() {
    this.isOn = !this.isOn;
  }

}
