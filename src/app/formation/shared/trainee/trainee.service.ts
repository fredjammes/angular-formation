import {Trainee} from './trainee';
import {Observable} from 'rxjs';

export abstract class TraineeService {
  public abstract getTrainees(): Observable<Trainee[]>;
}
