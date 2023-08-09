import { Component, Input } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {

  @Input()

   filteredCars: Car[] = []

   toggleRentStatus = (id:number) : void => {
    let carFound = this.filteredCars.find((car)=> car.id === id )
    if(carFound){
      carFound.isRented =  !carFound.isRented
    }
   }
}
