import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { MonPipePipe } from './mon-pipe.pipe';

@NgModule({
  exports: [HighlightDirective, MonPipePipe],
  declarations: [HighlightDirective, MonPipePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
