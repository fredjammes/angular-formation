import {TraineeWeb} from './trainee-web';
import {Trainee} from './trainee';
import {Size} from './size';

export class TraineeWebMapper {

  public static mapTo(traineeWeb: TraineeWeb, sizes: Size[]): Trainee {
    return {
      name: traineeWeb.name,
      firstname: traineeWeb.firstname,
      sizes: sizes.filter(size => traineeWeb.sizeIds.includes(size.id))
    };
  }
}
