import { Component, } from '@angular/core';
import { CarRentingService } from 'src/app/services/car-renting-service.service';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent  {

  constructor(private readonly carsService: CarRentingService){}

  showRented(){
    this.carsService.showRented()
  }

  showAvailable(){
    this.carsService.showAvailable()
  }
  
  reset(){
    this.carsService.reset()
  }
}