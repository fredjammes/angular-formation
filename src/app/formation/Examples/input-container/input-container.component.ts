import {Component} from '@angular/core';
import {TraineeService} from '../../shared/trainee/trainee.service';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent {

  public trainees$ = this.traineeService.getTrainees();

  constructor(private traineeService: TraineeService) {
  }
}
