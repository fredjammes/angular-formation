import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormationComponent} from './formation.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {FormationRoutingModule} from './formation-routing.module';
import {RouterModule} from '@angular/router';
import { PropertyBindingComponent } from './property-binding/property-binding.component';


@NgModule({
  declarations: [FormationComponent, InterpolationComponent, PropertyBindingComponent],
  imports: [
    CommonModule,
    FormationRoutingModule,
    RouterModule
  ]
})
export class FormationModule {
}
