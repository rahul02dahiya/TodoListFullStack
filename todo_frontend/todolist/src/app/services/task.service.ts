import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8082';
  private todoUrl = `${this.baseUrl}/todos`;
  private categoryUrl = `${this.baseUrl}/category`;

  constructor(private http: HttpClient) {}

  // Get categories by user ID
  getCategoriesByUserId(userId: number) {
    return this.http.get(`${this.categoryUrl}/user/${userId}`);
  }

  // Add a new category
  addCategory(category: any) {
    return this.http.post(`${this.categoryUrl}/save`, category);
  }

  // Delete category
  deleteCategory(categoryId: number) {
    return this.http.delete(`${this.categoryUrl}/${categoryId}`);
  }

  // Get todos by category ID
  getTodosByCategoryId(categoryId: number) {
    return this.http.get(`${this.todoUrl}/category/${categoryId}`);
  }

  // Add a new todo
  addTodo(todo: any) {
    return this.http.post(`${this.todoUrl}/save`, todo);
  }

  // Delete a todo
  deleteTodo(todoId: number) {
    return this.http.delete(`${this.todoUrl}/${todoId}`);
  }

  // Update todo
  updateTodo(id: number, todo: any) {
    return this.http.put(`${this.todoUrl}/update/${id}`, todo);
  }

  // Update status
  updateStatus(id: number, status: boolean) {
    return this.http.put(`${this.todoUrl}/status/${id}?status=${status}`, {});
  }

}