import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {
  mainTabs: any[];

  constructor(private appService: AppService) { }

  async ngOnInit() {

    this.mainTabs = [{
      id: 'tab1',
      label: 'Tab 1',
      active: true
    }, {
      id: 'tab2',
      label: 'Tab 2',
      active: false
    }, {
      id: 'tab3',
      label: 'Tab 3',
      active: false
    }];

    console.log(await this.appService.getNewJobs());
  }

}
