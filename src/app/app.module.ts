import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFeatModule } from './my-feat/my-feat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyFeatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
