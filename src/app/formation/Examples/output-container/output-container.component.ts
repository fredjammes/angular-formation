import {Component} from '@angular/core';
import {TraineeService} from '../../shared/trainee/trainee.service';

@Component({
  selector: 'app-output-container',
  templateUrl: './output-container.component.html',
  styleUrls: ['./output-container.component.scss']
})
export class OutputContainerComponent {

  trainees$ = this.traineeService.getTrainees();
  agreed = 0;
  disagreed = 0;

  constructor(
    private traineeService: TraineeService,
  ) {
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
