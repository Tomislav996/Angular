import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // loggerService: LoggerService = new LoggerService()

  constructor(private readonly loggerService: LoggerService){
  }

  ngOnInit(): void {
    this.loggerService.logMessage("List Expenses components")
  }
}
