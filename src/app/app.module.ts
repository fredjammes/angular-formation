import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormationModule} from './formation/formation.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormationModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
