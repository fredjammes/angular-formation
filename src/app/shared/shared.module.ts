import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { MonPipePipe } from './mon-pipe.pipe';
import { SizeLabelPipe } from './size-label.pipe';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';

@NgModule({
  exports: [HighlightDirective, MonPipePipe, SizeLabelPipe,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatOptionModule
  ],
  declarations: [HighlightDirective, MonPipePipe, SizeLabelPipe],
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatOptionModule
  ]
})
export class SharedModule { }
