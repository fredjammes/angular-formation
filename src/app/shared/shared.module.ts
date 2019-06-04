import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  exports: [HighlightDirective],
  declarations: [HighlightDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
