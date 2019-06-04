import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormationComponent} from './formation.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {FormationRoutingModule} from './formation-routing.module';
import {RouterModule} from '@angular/router';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {NgModelComponent} from './ng-model/ng-model.component';
import {FormsModule} from '@angular/forms';
import {NgIfComponent} from './ng-if/ng-if.component';
import {TemplateReferenceComponent} from './template-reference/template-reference.component';
import { DirectiveComponent } from './directive/directive.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    FormationComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    NgModelComponent,
    NgIfComponent,
    TemplateReferenceComponent,
    DirectiveComponent
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
