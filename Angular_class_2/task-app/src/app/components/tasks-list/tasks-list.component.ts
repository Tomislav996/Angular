import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  @Input()
  tasks_list: Task[] = [];
  showTasks = true;

  toggleShowTasks = () => {
    this.showTasks = !this.showTasks
  }
}
