import {Injectable} from '@angular/core';
import {Trainee} from './trainee';
import {TraineeService} from './trainee.service';
import {Observable, of} from 'rxjs';

@Injectable()
export class TraineeMockService implements TraineeService {
  private trainees: Trainee[] = [
    {
      firstname: 'Georges',
      name: 'Abitbol',
      sizes: [
        {
          id: 0,
          height: 25,
          width: 50
        },
        {
          id: 1,
          height: 50,
          width: 25
        },
        {
          id: 2,
          height: 50,
          width: 50
        }
      ]
    },
    {
      firstname: 'Gérard',
      name: 'Bouchard',
      sizes: [
        {
          id: 3,
          height: 100,
          width: 100
        },
        {
          id: 4,
          height: 200,
          width: 200
        },
        {
          id: 5,
          height: 500,
          width: 500
        }
      ]
    }
  ];
  public getTrainees(): Observable<Trainee[]> {
    return of(this.trainees);
  }
}
