import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-category-dropdown',
  standalone: false,
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css']
})
export class CategoryDropdownComponent {
  @Input() category: any;
  showTodos = false;

  toggleTodos() {
    this.showTodos = !this.showTodos;
}

constructor(private taskService: TaskService) {}

confirmStatusChange(todo:any){
  const confirmation = window.confirm('Are you sure you want to change the status?');

    if (confirmation) {
      const newStatus = !todo.status;
      this.taskService.updateStatus(todo.id, newStatus).subscribe(response => {
        todo.status = newStatus;
        console.log('Todo status updated:', response);
      });
    }
}
}
