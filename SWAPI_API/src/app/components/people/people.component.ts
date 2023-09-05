import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { Store } from '@ngrx/store';
import { StarWarsCharacter } from 'src/app/interfaces/people.interface';
import { fetchPeople } from 'src/app/store/people/people.actions';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: StarWarsCharacter[];

  constructor(private readonly peopleService: PeopleService, private readonly store: Store<any>){}

  ngOnInit(): void {
    this.store.dispatch(fetchPeople())
    
    this.store.select('peopleState').subscribe((data) => {
      this.people = data.people
    })
  }

}
