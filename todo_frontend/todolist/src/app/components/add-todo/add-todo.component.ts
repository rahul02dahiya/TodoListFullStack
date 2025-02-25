import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-todo',
  standalone:false,
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  categories: any[] = []; // Holds categories fetched from backend
  todo = { title: '', description: '', status: 0, categoryId: '', userId: 0 };
  message = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // Fetch user ID from local storage
    const userIdString = localStorage.getItem('userId');
    this.todo.userId = userIdString ? Number(userIdString) : 0;

    if (this.todo.userId > 0) {
      // Fetch categories from backend
      this.taskService.getCategoriesByUserId(this.todo.userId).subscribe({
        next: (data: any) => (this.categories = data),
        error: (err) => console.error('Error fetching categories:', err)
      });
    }
  }

  addTodo() {
    if (!this.todo.title.trim() || !this.todo.categoryId) {
      this.message = 'Title and Category are required';
      return;
    }

    // Format data as required
    const payload = {
      title: this.todo.title,
      description: this.todo.description,
      status: this.todo.status,
      category: {
        id: this.todo.categoryId,
        user: {
          id: this.todo.userId
        }
      }
    };

    // Send data to backend
    this.taskService.addTodo(payload).subscribe({
      next: () => {
        this.message = 'Todo added successfully!';
        this.todo = { title: '', description: '', status: 0, categoryId: '', userId: this.todo.userId };
      },
      error: (err) => {
        console.error('Error adding todo:', err);
        this.message = 'Error adding todo';
      }
    });
  }
}
