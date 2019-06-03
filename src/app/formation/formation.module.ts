import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormationComponent} from './formation.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {FormationRoutingModule} from './formation-routing.module';
import {RouterModule} from '@angular/router';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';


@NgModule({
  declarations: [FormationComponent, InterpolationComponent, PropertyBindingComponent, EventBindingComponent],
  imports: [
    CommonModule,
    FormationRoutingModule,
    RouterModule
  ]
})
export class FormationModule {
}
