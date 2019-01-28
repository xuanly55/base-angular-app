import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent implements OnInit {
  allJobs: any[];

  currentJob: any;
  hasPreviousJob: boolean;
  hasNextJob: boolean;

  constructor(private appService: AppService) { }

  ngOnInit() {
    $('.app-modal-page').on('show.bs.modal', async (e) => {
      this.allJobs = await this.appService.getNewJobs();
      this.currentJob = this.allJobs[3];

      this.hasJobs();
    });
  }

  nextJob() {
    const tempJob = this.allJobs.find(job => Number(job.id) === Number(this.currentJob.id) - 1);

    if (tempJob) {
      this.currentJob = tempJob;
    }

    this.hasJobs();
  }

  previousJob() {
    const tempJob = this.allJobs.find(job => Number(job.id) === Number(this.currentJob.id) + 1);

    if (tempJob) {
      this.currentJob = tempJob;
    }

    this.hasJobs();
  }

  hasJobs() {
    this.hasPreviousJob = Number(this.currentJob.id) !== this.allJobs.length ? true : false;
    this.hasNextJob = this.allJobs.find(job =>
      Number(job.id) === Number(this.currentJob.id) - 1) ? true : false;
  }

  onModalBodyClick() {
    alert('body clicked');
  }


}
