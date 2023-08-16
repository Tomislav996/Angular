import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AddExpensesComponent } from './components/add-expenses/add-expenses.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ListExpensesComponent,
    AddExpensesComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
