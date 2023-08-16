import { Injectable } from '@angular/core';
import { Expenses } from '../interfaces/expenses.interface';
import { EXPENSES_DATA } from '../data/expenses.data';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private _totalAmount = 1000
  private _expenses: Expenses[] = EXPENSES_DATA

  constructor() { }

  getTotalAmount = () => {
    return this. _totalAmount
  }

  getExpenses = () => {
    return this._expenses
  }
}
