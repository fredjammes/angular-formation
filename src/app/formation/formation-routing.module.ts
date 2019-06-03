import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormationComponent} from './formation.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {NgModelComponent} from './ng-model/ng-model.component';
import {NgIfComponent} from './ng-if/ng-if.component';
import {TemplateReferenceComponent} from './template-reference/template-reference.component';

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
    path: 'template-reference',
    component: TemplateReferenceComponent
  },
  {
    path: 'ng-if',
    component: NgIfComponent
  },
  {
    path: 'ng-model',
    component: NgModelComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(formationRoutes)
  ]
})
export class FormationRoutingModule {
}
