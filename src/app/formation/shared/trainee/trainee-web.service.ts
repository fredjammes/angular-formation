import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TraineeService} from './trainee.service';
import {forkJoin, Observable} from 'rxjs';
import {Trainee} from './trainee';
import {Size} from './size';
import {map} from 'rxjs/operators';
import {TraineeWeb} from './trainee-web';
import {TraineeWebMapper} from './trainee-web.mapper';

@Injectable()
export class TraineeWebService implements TraineeService {
  constructor(
    private http: HttpClient
  ) { }
  public getTrainees(): Observable<Trainee[]> {
    return forkJoin([
      this.http.get<TraineeWeb[]>('trainees'),
      this.http.get<Size[]>('sizes')
    ]).pipe(
        map(([traineesWeb, sizes]: [TraineeWeb[], Size[]]) => {
          return traineesWeb.map(traineeWeb => TraineeWebMapper.mapTo(traineeWeb, sizes));
        })
    );
  }
}
