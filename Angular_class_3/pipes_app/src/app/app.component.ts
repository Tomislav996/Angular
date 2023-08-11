import { Component } from '@angular/core';
import { Person, Address} from './interfaces/person.interface';
import { employees } from './mock-data/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Person[] = employees
  position: string = ''

  companyTitleAsync = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("IT Services and consulting Corp")
    },2000)
  })
}
