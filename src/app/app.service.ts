import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AppUtilsService } from './app-utils.service';

@Injectable()
export class AppService {
  email: string;
  theme: string;

  constructor(
    private http: HttpClient,
    private appUtilsService: AppUtilsService,
    @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  setEmail(userEmail) {
    this.email = userEmail;
  }

  getEmail() {
    return this.email;
  }

  setSsoId(sid) {
    this.storage.set('sso', sid);
  }

  getSsoId() {
    return this.storage.get('sso');
  }

  setTheme(theme) {
    if (theme === 'Light') {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
      }
      if (!document.body.classList.contains('light-theme')) {
        document.body.classList.add('light-theme');
      }

    } else {
      // this.lionbridgeLogoFile = 'lionbridge-new-logo-white.png';

      if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
      }
      if (!document.body.classList.contains('dark-theme')) {
        document.body.classList.add('dark-theme');
      }
    }

    this.storage.set('theme', theme);
  }

  getTheme() {
    if (!this.storage.get('theme')) {
      this.setTheme('Dark');
    }
    return this.storage.get('theme');
  }

  async getNewJobs() {
    const headers = {
        'Content-Type': 'text/csv'
    };

    const newJobs = await this.http.get('./assets/data/new-tasks.csv', { responseType: 'text', headers: headers }).toPromise();

    const newJobData = this.appUtilsService.getParsedCsvData(newJobs, [
      'id',	'jobId', 'companyIcon',	'company',	'description',	'priority',	'dueDate',	'agentIcon',	'agentIconXY', 'pay',
      'words',	'ppw',	'fromLanguage',	'toLanguage', 'almostTime', 'timeRemaining'
    ]);

    return newJobData;

  }

}
