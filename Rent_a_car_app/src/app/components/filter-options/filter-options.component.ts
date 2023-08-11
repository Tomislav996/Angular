import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {

  @Output() showRentedEvent = new EventEmitter()
  @Output() showAvailableEvent = new EventEmitter()
  @Output() resetEvent = new EventEmitter()

  showRented = () => {
    this.showRentedEvent.emit()
  }
  showAvailable = () => {
    this.showAvailableEvent.emit()
  }
  reset = () => {
    this.resetEvent.emit()
  }
}