import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(cars: Car[], sort: string): Car[] {

    return cars.sort((a, b) => {
      if(sort === "Ascending") {
        return  a.model.localeCompare(b.model)
      } else if(sort === "Descending"){
        return  b.model.localeCompare(a.model)
      } else {
        return 0
      }
    });
  }

}
