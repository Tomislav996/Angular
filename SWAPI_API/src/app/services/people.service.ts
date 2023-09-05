import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { StarWarsCharacter } from '../interfaces/people.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private readonly http: HttpClient) {}


  fetchPeople(): Observable<StarWarsCharacter[]> {
    return this.http.get('https://swapi.dev/api/people').pipe(
        map((data: any) =>
          data.results.map((result: any) => ({
            name: result.name,
            gender: result.gender,
            birthYear: result.birth_year,
            height: result.height,
            mass: result.mass,
          }))
        )
      );
  }
}
