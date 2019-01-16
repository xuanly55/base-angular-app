import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit, OnChanges {
  @Input() tabs: any[];
  @Output() tabSelected: EventEmitter<any> = new EventEmitter();
  @Input() selectedTab: string;

  currentTheme: string;

  items: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService) { }

  ngOnInit() {
    this.currentTheme = this.appService.getTheme();

    this.route.params.subscribe(params => {
      if (this.tabs) {
        this.handleTabClicked(params['type']);
      }
    });

    this.items = [{
      label: 'Settings',
      icon: 'fa-cog',
      action: () => {
        this.goToUserSettings();
      }
    }];
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes['selectedTab'] && this.selectedTab) {
      this.handleTabClicked(changes.selectedTab.currentValue);
    }
  }

  handleTabClicked(tabId) {
    if (!tabId) {
      tabId = this.tabs[0].id;
    }
    this.tabs.forEach((tab) => {
      if (tab.id === tabId) {
        tab.active = true;
        this.router.navigateByUrl('/app/main/' + tabId);

        this.tabSelected.emit(tabId);
      } else {
        tab.active = false;
      }
    });
  }

  onHidden(): void {
    // console.log('Dropdown is hidden');
  }
  onShown(): void {
    // console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    // console.log('Dropdown state is changed');
  }

  goToUserSettings() {
    this.router.navigateByUrl('/app/settings');
  }

  goHome() {
    this.router.navigateByUrl('/app/main');
  }

}
