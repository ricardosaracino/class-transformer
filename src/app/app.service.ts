import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {Schedule} from './models/schedule';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getSchedules(): Observable<Schedule[]> {
    return this.http.get('http://mybackend.com/api/schedules').pipe(
      map((res: Object[]) => {
        return plainToClass(Schedule, res);
      })
    );
  }
}
