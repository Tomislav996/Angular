import { Injectable } from '@angular/core';
import { CARS_DATA } from '../data/cars.data';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarRentingService {
  private _cars: Car[] = [...CARS_DATA];
  private _filteredCars: Car[] = [...CARS_DATA];


  getCars() {
    return this._filteredCars;
  }

  showRented(): void {
    this._filteredCars = this._cars.filter((car) => car.isRented);
  }

  showAvailable(): void {
    this._filteredCars = this._cars.filter((car) => !car.isRented);
  }

  reset(): void {
    this._filteredCars =  this._cars
  }

  toggleRentStatus(id: number) {
    const carFound = this._filteredCars.find((car) => car.id === id);
    if (carFound) {
      carFound.isRented = !carFound.isRented;
    }
  }
}