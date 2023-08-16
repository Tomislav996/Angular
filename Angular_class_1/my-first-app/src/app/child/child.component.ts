import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { Room, RoomsList } from './child';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {

  @ViewChild(HeaderComponent, {static:true}) headerComponent!: HeaderComponent;

  @Output() dataEvent = new EventEmitter<string>()

  sendDataToParent(){
    const dataToSend = "Data from child component!";
    this.dataEvent.emit(dataToSend)
  }

  @Input() message = ""

  hotelName = "Hilton Hotel"

  numberOfRooms = 20

  hideRooms = false

  rooms: Room = {
    totalRooms:  20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomsList: RoomsList[] = [];

  constructor(){}

ngOnInit(): void {
  this.roomsList=[{
    roomNumber: 1,
    roomType: "Deluxe Room",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
    price: 1000,
    photos: "https://www.home-designing.com/wp-content/uploads/2008/10/living_room_part2_by_ozhan-495x312.jpg",
    checkInTime: new Date(`11-Nov-2022`),
    checkOutDate: new Date(`15-Nov-2022`),
    rating:4.5
  },
  {
    roomNumber: 2,
    roomType: "Regular Room",
    amenities: " TV, Bathroom, Kitchen",
    price: 500,
    photos: "https://www.home-designing.com/wp-content/uploads/2008/10/living_room_part2_by_ozhan-495x312.jpg",
    checkInTime: new Date(`13-Nov-2022`),
    checkOutDate: new Date(`20-Nov-2022`),
    rating:3.4
  },
  {
    roomNumber: 3,
    roomType: "Private Suite",
    amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen,",
    price: 1200,
    photos: "https://www.home-designing.com/wp-content/uploads/2008/10/living_room_part2_by_ozhan-495x312.jpg",
    checkInTime: new Date(`20-Nov-2022`),
    checkOutDate: new Date(`25-Nov-2022`),
    rating:5.0
  },
]
}

  toggle(){
    this.hideRooms = !this.hideRooms
  }

  selectRoom(room: RoomsList){
    console.log(room);
    
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    
  }

  addRoom(){
    let room: RoomsList ={
      roomNumber: 4,
      roomType: "Private Suite",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen,",
      price: 1900,
      photos: "https://www.home-designing.com/wp-content/uploads/2008/10/living_room_part2_by_ozhan-495x312.jpg",
      checkInTime: new Date(`1-Nov-2022`),
      checkOutDate: new Date(`6-Nov-2022`),
      rating:2.0
    }
    this.roomsList = [...this.roomsList, room]
  }

   


}
