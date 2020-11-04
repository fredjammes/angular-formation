import {Component, Input} from '@angular/core';
import {Trainee} from '../../../shared/trainee/trainee';

@Component({
  selector: 'app-input-presentation',
  templateUrl: './input-presentation.component.html',
  styleUrls: ['./input-presentation.component.scss']
})
export class InputPresentationComponent {

  @Input() trainee: Trainee;
  @Input('leFormateurDeCetteFormation') trainer: string;

  private _thought: string;

  @Input()
  public set thought(ceQueJaiRecu: string) {
    if (ceQueJaiRecu !== 'super') {
      this._thought = 'super';
    }
  }

  public get thought(): string {
    return this._thought;
  }
}
