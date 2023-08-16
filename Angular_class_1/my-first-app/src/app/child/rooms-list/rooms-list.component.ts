import { Component, EventEmitter, Input, Output,ChangeDetectionStrategy, OnInit, } from '@angular/core';
import {  RoomsList } from '../child';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit{

  @Input() roomsList: RoomsList[] = []
  @Output() selectedRoom = new EventEmitter<RoomsList>()

  

  constructor(){
  }


  ngOnInit(): void {
  }

  selectRoom(room: RoomsList){
    this.selectedRoom.emit(room)
  }


}
