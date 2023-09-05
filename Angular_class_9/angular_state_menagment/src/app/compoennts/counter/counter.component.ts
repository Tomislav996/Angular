import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store"
import { increment, decrement } from 'src/app/store/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number = 0
  constructor(private readonly store: Store<{counter: {count: number}}>){}

  ngOnInit(): void {
    this.store.select('counter').subscribe((value) => {
      this.count = value.count;
    })
  }

  increment = () :any => {
    this.store.dispatch(this.increment())
  }

  decrement = () : any => {
    this.store.dispatch(this.decrement())
  }
}
