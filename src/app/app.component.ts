import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Schedule} from './models/schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public readonly title = 'Class Transformer with Localization';

  public schedules: Schedule[] = [];

  @Inject(LOCALE_ID) public localeMember: string;

  constructor(public appService: AppService, @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {

    console.log('AppComponent.locale: ', this.locale);
    console.log('AppComponent.localeMember: ', this.localeMember);

    this.appService.getSchedules().subscribe((schedules: Schedule[]) => {

      console.log(schedules);

      this.schedules = schedules;
    });
  }
}
