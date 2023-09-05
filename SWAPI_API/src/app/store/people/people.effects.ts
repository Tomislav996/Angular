import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PeopleService } from 'src/app/services/people.service';
import { switchMap, map } from 'rxjs';
import { StarWarsCharacter } from 'src/app/interfaces/people.interface';
import { fetchPeople, fetchPeopleSuccess } from './people.actions';

@Injectable()
export class PeopleEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly peopleService: PeopleService
  ) {}

  fetchPeople$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fetchPeople), 
    switchMap(() =>
      this.peopleService.fetchPeople().pipe(
        map((people: StarWarsCharacter[]) =>
          fetchPeopleSuccess({ people: people }) 
        )
      )
    )
  )
);
}
