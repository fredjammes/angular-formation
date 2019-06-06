import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormationComponent} from './formation.component';
import {InterpolationComponent} from './Examples/interpolation/interpolation.component';
import {FormationRoutingModule} from './formation-routing.module';
import {RouterModule} from '@angular/router';
import {PropertyBindingComponent} from './Examples/property-binding/property-binding.component';
import {EventBindingComponent} from './Examples/event-binding/event-binding.component';
import {NgModelComponent} from './Examples/ng-model/ng-model.component';
import {FormsModule} from '@angular/forms';
import {NgIfComponent} from './Examples/ng-if/ng-if.component';
import {TemplateReferenceComponent} from './Examples/template-reference/template-reference.component';
import {DirectiveComponent} from './Examples/directive/directive.component';
import {SharedModule} from '../shared/shared.module';
import {NgForComponent} from './Examples/ng-for/ng-for.component';
import {NgSwitchComponent} from './Examples/ng-switch/ng-switch.component';
import { PipeComponent } from './Examples/pipe/pipe.component';
import { InputResizerComponent } from './TPs/input-resizer/input-resizer.component';
import { InputResizer2Component } from './TPs/input-resizer2/input-resizer2.component';
import { InputResizer3Component } from './TPs/input-resizer3/input-resizer3.component';
import { InputResizer4Component } from './TPs/input-resizer4/input-resizer4.component';
import { ComponentNgSwitcherComponent } from './TPs/component-ng-switcher/component-ng-switcher.component';
import { InputResizer5Component } from './TPs/input-resizer5/input-resizer5.component';
import { NgModelChangeComponent } from './Examples/ng-model-change/ng-model-change.component';
import { InputResizer6Component } from './TPs/input-resizer6/input-resizer6.component';
import { InputResizer7Component } from './TPs/input-resizer7/input-resizer7.component';


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
    InputResizer7Component
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule
  ]
})
export class FormationModule {
}
