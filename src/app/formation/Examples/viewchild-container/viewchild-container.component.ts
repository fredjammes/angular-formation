import {Component, ViewChild} from '@angular/core';
import {InteractionLocalvarPresentationComponent} from '../interaction-localvar-container/interaction-localvar-presentation/interaction-localvar-presentation.component';

@Component({
  selector: 'app-viewchild-container',
  templateUrl: './viewchild-container.component.html',
  styleUrls: ['./viewchild-container.component.scss']
})
export class ViewchildContainerComponent {

  @ViewChild(InteractionLocalvarPresentationComponent) childComp: InteractionLocalvarPresentationComponent;

  public wakeUpMyChild() {
    this.childComp.wakeUp();
  }
}
