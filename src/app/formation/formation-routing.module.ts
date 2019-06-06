import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormationComponent} from './formation.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {NgModelComponent} from './ng-model/ng-model.component';
import {NgIfComponent} from './ng-if/ng-if.component';
import {TemplateReferenceComponent} from './template-reference/template-reference.component';
import {DirectiveComponent} from './directive/directive.component';
import {NgForComponent} from './ng-for/ng-for.component';
import {NgSwitchComponent} from './ng-switch/ng-switch.component';
import {PipeComponent} from './pipe/pipe.component';
import {InputResizerComponent} from './input-resizer/input-resizer.component';
import {InputResizer2Component} from './input-resizer2/input-resizer2.component';
import {InputResizer3Component} from './input-resizer3/input-resizer3.component';
import {InputResizer4Component} from './input-resizer4/input-resizer4.component';
import {ComponentNgSwitcherComponent} from './component-ng-switcher/component-ng-switcher.component';
import {InputResizer5Component} from './input-resizer5/input-resizer5.component';
import {NgModelChangeComponent} from './ng-model-change/ng-model-change.component';

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
