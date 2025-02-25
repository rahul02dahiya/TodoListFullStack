import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent {
  category = { name: '', description: '', user: {id: ''}};
  message = '';

  constructor(private taskService: TaskService) {}

  addCategory() {
    if (!this.category.name.trim()) {
      this.message = 'Category name is required';
      return;
    }
    this.category.user.id = localStorage.getItem('userId') || "";

    this.taskService.addCategory(this.category).subscribe({
      next: () => {
        this.message = 'Category added successfully!';
        this.category = { name: '', description: '', user:{id:''} };
      },
      error: (err) => {
        console.error('Error adding category:', err);
        this.message = 'Error adding category';
      }
    });
  }
}

