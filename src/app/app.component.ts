import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Schedule} from './models/schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'transformer';

  schedules: Schedule[] = []

  constructor(public appService: AppService) {
  }

  ngOnInit() {

    this.appService.getSchedules().subscribe((schedules: Schedule[]) => {

      console.log(schedules);

      this.schedules = schedules;
    });
  }
}
