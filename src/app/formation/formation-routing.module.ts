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
import {MaterialComponent} from './material/material.component';
import {InputResizerComponent} from './input-resizer/input-resizer.component';
import {InputResizer2Component} from './input-resizer2/input-resizer2.component';

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
    path: 'ng-model',
    component: NgModelComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'material',
    component: MaterialComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(formationRoutes)
  ]
})
export class FormationRoutingModule {
}
