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
      this.allJobs.map(ajob => {
        ajob.active = ajob.id === this.currentJob.id ? true : false;
        ajob.isEven = Number(ajob.id) % 2 === 0 ? true : false;
      });

      this.hasJobs();
      (<any>$('.carousel')).carousel('pause');
    });
  }

  nextJob() {
    const tempJob = this.allJobs.find(job => Number(job.id) === Number(this.currentJob.id) - 1);

    if (tempJob) {
      this.currentJob = tempJob;
    }

    this.hasJobs();

    this.nextSlide();
  }

  previousJob() {
    const tempJob = this.allJobs.find(job => Number(job.id) === Number(this.currentJob.id) + 1);

    if (tempJob) {
      this.currentJob = tempJob;
    }

    this.hasJobs();

    this.prevSlide();
  }

  hasJobs() {
    this.hasPreviousJob = Number(this.currentJob.id) !== this.allJobs.length ? true : false;
    this.hasNextJob = this.allJobs.find(job =>
      Number(job.id) === Number(this.currentJob.id) - 1) ? true : false;
  }

  onModalBodyClick() {
    // alert('body clicked');
  }

  prevSlide() {
    (<any>$('.carousel')).carousel('prev');
  }

  nextSlide() {
    (<any>$('.carousel')).carousel('next');
  }


}
