import { Component } from '@angular/core';
import { Task } from './interfaces/task.interface';
import { TaskStatus } from './interfaces/task-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = "Task Application";
    subtitle = "Track your tasks";

    tasks: Task[] = [
      {
      id: 1,
      title: "Walk the dog",
      description: "Walk the dog in the park today",
      status: TaskStatus.NOT_STARTED
    },
    {
      id: 2,
      title: "Wash the dishes",
      description: "Put in washing machine",
      status: TaskStatus.NOT_STARTED
    },
    {
      id: 3,
      title: "Read a book",
      description: "Read 10 pages of a book",
      status: TaskStatus.DONE
    },
    {
      id: 4,
      title: "Learn Angular",
      description: "Angular is a beast",
      status: TaskStatus.IN_PROGRESS
    },
  ]
}
