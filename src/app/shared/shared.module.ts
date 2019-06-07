import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { MonPipePipe } from './mon-pipe.pipe';
import { SizeLabelPipe } from './size-label.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  exports: [HighlightDirective, MonPipePipe, SizeLabelPipe],
  declarations: [HighlightDirective, MonPipePipe, SizeLabelPipe],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class SharedModule { }
