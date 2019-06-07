import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { MonPipePipe } from './mon-pipe.pipe';
import { SizeLabelPipe } from './size-label.pipe';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  exports: [HighlightDirective, MonPipePipe, SizeLabelPipe,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatOptionModule
  ],
  declarations: [HighlightDirective, MonPipePipe, SizeLabelPipe],
  imports: [
    CommonModule, HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatOptionModule
  ]
})
export class SharedModule { }
