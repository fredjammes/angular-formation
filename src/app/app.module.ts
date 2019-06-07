import {LOCALE_ID, NgModule} from '@angular/core';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

import {AppComponent} from './app.component';
import {FormationModule} from './formation/formation.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {registerLocaleData} from '@angular/common';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormationModule,
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
