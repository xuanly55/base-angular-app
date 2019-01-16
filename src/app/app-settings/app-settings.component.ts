import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss']
})
export class AppSettingsComponent implements OnInit {
  currentTheme: string;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.currentTheme = this.appService.getTheme();
  }

  toggleTheme(theme) {
    this.appService.setTheme(theme);
    this.currentTheme = theme;
  }

  backToMain() {
    this.router.navigateByUrl('/app/main');
  }
}
