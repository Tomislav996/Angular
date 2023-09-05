import { createAction, props } from "@ngrx/store";
import { StarWarsCharacter } from "src/app/interfaces/people.interface";

export const FETCH_PEOPLE = '[People] Fetch People';
export const  FETCH_PEOPLE_SUCCESS = '[People] Fetch People Success';

export const fetchPeople = createAction(FETCH_PEOPLE);
export const fetchPeopleSuccess = createAction(FETCH_PEOPLE_SUCCESS, props<{people: StarWarsCharacter[]}>());