import { Component } from '@angular/core';
import { Car } from './interfaces/car.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = "First Angular App!"
  title = "Car rent app"
  
}