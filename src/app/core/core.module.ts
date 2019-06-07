import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UrlApiInterceptorService} from './http/url-api-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlApiInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {
}
