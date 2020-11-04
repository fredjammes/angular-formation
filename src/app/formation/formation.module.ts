import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormationComponent} from './formation.component';
import {InterpolationComponent} from './Examples/interpolation/interpolation.component';
import {FormationRoutingModule} from './formation-routing.module';
import {RouterModule} from '@angular/router';
import {PropertyBindingComponent} from './Examples/property-binding/property-binding.component';
import {EventBindingComponent} from './Examples/event-binding/event-binding.component';
import {NgModelComponent} from './Examples/ng-model/ng-model.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIfComponent} from './Examples/ng-if/ng-if.component';
import {TemplateReferenceComponent} from './Examples/template-reference/template-reference.component';
import {DirectiveComponent} from './Examples/directive/directive.component';
import {SharedModule} from '../shared/shared.module';
import {NgForComponent} from './Examples/ng-for/ng-for.component';
import {NgSwitchComponent} from './Examples/ng-switch/ng-switch.component';
import {PipeComponent} from './Examples/pipe/pipe.component';
import {InputResizerComponent} from './TPs/input-resizer/input-resizer.component';
import {InputResizer2Component} from './TPs/input-resizer2/input-resizer2.component';
import {InputResizer3Component} from './TPs/input-resizer3/input-resizer3.component';
import {InputResizer4Component} from './TPs/input-resizer4/input-resizer4.component';
import {ComponentNgSwitcherComponent} from './TPs/component-ng-switcher/component-ng-switcher.component';
import {InputResizer5Component} from './TPs/input-resizer5/input-resizer5.component';
import {NgModelChangeComponent} from './Examples/ng-model-change/ng-model-change.component';
import {InputResizer6Component} from './TPs/input-resizer6/input-resizer6.component';
import {InputResizer7Component} from './TPs/input-resizer7/input-resizer7.component';
import {TraineeService} from './shared/trainee/trainee.service';
import {TraineeWebService} from './shared/trainee/trainee-web.service';
import {InputResizer8Component} from './TPs/input-resizer8/input-resizer8.component';
import {TemplateDrivenFormComponent} from './Examples/template-driven-form/template-driven-form.component';
import {InputResizerNgModelChangeComponent} from './TPs/input-resizer-ng-model-change/input-resizer-ng-model-change.component';
import {ReactiveFormComponent} from './Examples/reactive-form/reactive-form.component';
import {ReactiveFormFormbuilderComponent} from './Examples/reactive-form-formbuilder/reactive-form-formbuilder.component';
import {ForbiddenValidatorDirective} from './shared/forbidden-name/forbidden-name.directive';
import {InputContainerComponent} from './Examples/input-container/input-container.component';
import {InputPresentationComponent} from './Examples/input-container/input-presentation/input-presentation.component';
import {OutputContainerComponent} from './Examples/output-container/output-container.component';
import {OutputPresentationComponent} from './Examples/output-container/output-presentation/output-presentation.component';
import {InteractionLocalvarContainerComponent} from './Examples/interaction-localvar-container/interaction-localvar-container.component';
import {InteractionLocalvarPresentationComponent} from './Examples/interaction-localvar-container/interaction-localvar-presentation/interaction-localvar-presentation.component';
import {ViewchildContainerComponent} from './Examples/viewchild-container/viewchild-container.component';
import {InteractionWithServiceContainerComponent} from './Examples/interaction-with-service-container/interaction-with-service-container.component';
import {ChatWindowComponent} from './Examples/interaction-with-service-container/chat-window/chat-window.component';
import {ChatInputComponent} from './Examples/interaction-with-service-container/chat-input/chat-input.component';
import {InbetweenCustomAgeDirective} from './shared/inbetween-age/inbetween-custom-age.directive';


@NgModule({
  declarations: [
    FormationComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    NgModelComponent,
    NgIfComponent,
    TemplateReferenceComponent,
    DirectiveComponent,
    NgForComponent,
    NgSwitchComponent,
    PipeComponent,
    InputResizerComponent,
    InputResizer2Component,
    InputResizer3Component,
    InputResizer4Component,
    ComponentNgSwitcherComponent,
    InputResizer5Component,
    NgModelChangeComponent,
    InputResizer6Component,
    InputResizer7Component,
    InputResizer8Component,
    TemplateDrivenFormComponent,
    InputResizerNgModelChangeComponent,
    ReactiveFormComponent,
    ReactiveFormFormbuilderComponent,
    ForbiddenValidatorDirective,
    InputContainerComponent,
    InputPresentationComponent,
    OutputContainerComponent,
    OutputPresentationComponent,
    InteractionLocalvarContainerComponent,
    InteractionLocalvarPresentationComponent,
    ViewchildContainerComponent,
    InteractionWithServiceContainerComponent,
    ChatWindowComponent,
    ChatInputComponent,
    InbetweenCustomAgeDirective
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: TraineeService,
      useClass: TraineeWebService
    }
  ]
})
export class FormationModule {
}
