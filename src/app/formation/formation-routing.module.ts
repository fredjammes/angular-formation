import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormationComponent} from './formation.component';
import {InterpolationComponent} from './Examples/interpolation/interpolation.component';
import {PropertyBindingComponent} from './Examples/property-binding/property-binding.component';
import {EventBindingComponent} from './Examples/event-binding/event-binding.component';
import {NgModelComponent} from './Examples/ng-model/ng-model.component';
import {NgIfComponent} from './Examples/ng-if/ng-if.component';
import {TemplateReferenceComponent} from './Examples/template-reference/template-reference.component';
import {DirectiveComponent} from './Examples/directive/directive.component';
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

const formationRoutes: Routes = [
  {
    path: '',
    component: FormationComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent
  },
  {
    path: 'event-binding',
    component: EventBindingComponent
  },
  {
    path: 'input-resizer',
    component: InputResizerComponent
  },
  {
    path: 'input-resizer2',
    component: InputResizer2Component
  },
  {
    path: 'input-resizer3',
    component: InputResizer3Component
  },
  {
    path: 'input-resizer4',
    component: InputResizer4Component
  },
  {
    path: 'input-resizer5',
    component: InputResizer5Component
  },
  {
    path: 'input-resizer6',
    component: InputResizer6Component
  },
  {
    path: 'input-resizer7',
    component: InputResizer7Component
  },
  {
    path: 'template-reference',
    component: TemplateReferenceComponent
  },
  {
    path: 'ng-if',
    component: NgIfComponent
  },
  {
    path: 'ng-for',
    component: NgForComponent
  },
  {
    path: 'ng-switch',
    component: NgSwitchComponent
  },
  {
    path: 'component-ng-switcher',
    component: ComponentNgSwitcherComponent
  },
  {
    path: 'ng-model',
    component: NgModelComponent
  },
  {
    path: 'ng-model-change',
    component: NgModelChangeComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(formationRoutes)
  ]
})
export class FormationRoutingModule {
}
