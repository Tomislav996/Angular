import { Car } from "../interfaces/car.interface";

export const CARS_DATA: Car[] = [
    {
      id: 1,
      model: 'Toyota Corolla',
      engineType: 'Gasoline',
      yearOfProduction: '2022',
      priceToRent: 50,
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/8830932a-047b-4b4e-b42c-ad6a29afef22/0d315397-2d3f-45aa-9830-69d55e131503.png',
      isRented: false
    },
    {
      id: 2,
      model: 'Honda Civic',
      engineType: 'Gasoline',
      yearOfProduction: '2021',
      priceToRent: 45,
      image: 'https://freepngimg.com/thumb/honda/32503-1-honda-civic-photo.png',
      isRented: true
    },
    {
      id: 3,
      model: 'Ford Mustang',
      engineType: 'Gasoline',
      yearOfProduction: '2020',
      priceToRent: 70,
      image: 'https://i.pinimg.com/originals/af/8b/2b/af8b2bddab3f12fe5117e814535bf0f8.png',
      isRented: false
    },
    {
      id: 4,
      model: 'Mercedes 4x4',
      engineType: 'Electric',
      yearOfProduction: '2020',
      priceToRent: 100,
      image: 'https://freepngimg.com/thumb/car/4-2-car-png-hd.png',
      isRented: false
    },
    {
      id: 5,
      model: 'Chevrolet Camaro',
      engineType: 'Gasoline',
      yearOfProduction: '2022',
      priceToRent: 65,
      image: 'https://www.cars.com/i/large/in/v2/stock_photos/a6dd2683-3f75-4e61-bf82-67a30014042b/cc6dde76-d911-42df-a7d0-65281fbc2799.png',
      isRented: true
    },
    {
      id: 6,
      model: 'BMW',
      engineType: 'Gasoline',
      yearOfProduction: '2011',
      priceToRent: 55,
      image: 'https://freepngimg.com/thumb/car/1-2-car-png-picture.png',
      isRented: false
    }
  ];