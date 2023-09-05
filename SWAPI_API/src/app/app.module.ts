import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { PeopleComponent } from './components/people/people.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { peopleReducer } from './store/people/people.reducer';
import { PeopleEffects } from './store/people/people.effects';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      peopleState: peopleReducer,
    }),
    EffectsModule.forRoot([PeopleEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
