import { Component, DoCheck, OnInit} from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarRentingService } from 'src/app/services/car-renting-service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit, DoCheck {

   sortBy: string = "Ascending"

   cars: Car[] = []
   
   constructor(private readonly carsService: CarRentingService ){
    this.cars = this.carsService.getCars()
   }
   
   ngOnInit() {
     this.cars = this.carsService.getCars()
   }

   toggleRentStatus(id: number){
    this.carsService.toggleRentStatus(id)
   }

   ngDoCheck(): void {
    this.cars = this.carsService.getCars()
   }
   
}