import { Component, OnInit } from '@angular/core';
import { Expenses } from 'src/app/interfaces/expenses.interface';
import { ExpensesService } from 'src/app/services/expenses.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.scss']
})
export class ListExpensesComponent implements OnInit{

  expenses: Expenses[] = []
  constructor(private readonly loggerService: LoggerService, private readonly expensesService: ExpensesService) {

  }

  ngOnInit(): void {
    this.loggerService.logMessage("List expenses component")
    this.expenses = this.expensesService.getExpenses();
  }
}
