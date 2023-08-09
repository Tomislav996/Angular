import { Component } from '@angular/core';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {

  dataFromChild: string = "";

  handleDataFromChild(data: string){
    this.dataFromChild = data;
  }

  title = 'my-first-app';
  name = "Bob"
  favoriteHobbies: string[] = ["Playing stupid video games", "Watching TV"]
  myColor = "yellow"
  imageSrc = "https://randomwordgenerator.com/img/picture-generator/57e9d04b4a5aaf14f1dc8460962e33791c3ad6e04e507440722d72d09245c7_640.jpg"
  favoriteFrameWork = "React"

  messageFromParent: string = "Hello From Parent!"

}


