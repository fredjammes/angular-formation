import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Trainee} from '../../../shared/trainee/trainee';

@Component({
  selector: 'app-output-presentation',
  templateUrl: './output-presentation.component.html',
  styleUrls: ['./output-presentation.component.scss']
})
export class OutputPresentationComponent {

  @Input() trainee: Trainee;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
