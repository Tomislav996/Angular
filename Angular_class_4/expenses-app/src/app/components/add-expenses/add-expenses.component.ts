import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {
  constructor(private readonly loggerService: LoggerService ){
  }

  ngOnInit(): void {
    this.loggerService.logMessage("add expense component")
  }
}
