import { createReducer, on } from "@ngrx/store";
import { StarWarsCharacter } from "src/app/interfaces/people.interface";
import { fetchPeopleSuccess } from "./people.actions";

export interface PeopleState {
    people: StarWarsCharacter[];
}

export const initialState: PeopleState = {
    people: [],
}

export const peopleReducer = createReducer(
  initialState,
  on(fetchPeopleSuccess, (state, props) => {
    return {
      ...state,
      people: props.people,
    };
  })
);