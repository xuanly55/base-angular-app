import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-signin',
  templateUrl: './app-signin.component.html',
  styleUrls: ['./app-signin.component.scss']
})
export class AppSigninComponent implements OnInit {
  @ViewChild('ssoLoginForm') ssoLoginForm;

  ssoLoginModel: any;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.ssoLoginModel = {
      email: this.appService.getEmail(),
      password: ''
    };
  }

  login() {
    if (this.ssoLoginForm.valid) {
      this.appService.setSsoId(this.ssoLoginModel.email);
      this.router.navigateByUrl('/app/main');

    } else {
      console.log('Unable to sign in!');
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === 13) {
      this.login();
    }
  }
}
