import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  welcomeMsg: string = "Welcome To Our Products App!"
  description: string = "Please Browse our latest collection of high quality products"
}
