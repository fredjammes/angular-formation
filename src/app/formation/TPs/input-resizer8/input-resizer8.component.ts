import { Component, OnInit } from '@angular/core';
import {Trainee} from '../../shared/trainee/trainee';
import {TraineeService} from '../../shared/trainee/trainee.service';
import {Size} from '../../shared/trainee/size';

@Component({
  selector: 'app-input-resizer8',
  templateUrl: './input-resizer8.component.html',
  styleUrls: ['./input-resizer8.component.scss']
})
export class InputResizer8Component implements OnInit {
  public dateDuJour: Date = new Date();
  public currentSizeChoice: Size;
  public height: number;
  public heightWithUnit: string;
  public width: number;
  public widthWithUnit: string;
  public sizes: Size[] = [
    {
      id: 0,
      width: 100,
      height: 100
    },
    {
      id: 1,
      width: 150,
      height: 150
    },
    {
      id: 2,
      width: 200,
      height: 200
    }
  ];
  public units: string[] = ['px', 'em'];
  public currentUnit = this.units[0];
  public trainees: Trainee[];

  public currentTrainee: Trainee;

  constructor(
    private traineeService: TraineeService
  ) {
  }

  public ngOnInit(): void {
    this.traineeService.getTrainees()
      .subscribe(receivedTrainees => this.trainees = receivedTrainees);
  }

  public chooseSize(size: Size) {
    this.onWidthChange(size.width);
    this.onHeightChange(size.height);
  }

  public onWidthChange(width: number): void {
    this.width = width;
    this.widthWithUnit = width + this.currentUnit;
  }

  public onHeightChange(height): void {
    this.height = height;
    this.heightWithUnit = height + this.currentUnit;
  }
}
