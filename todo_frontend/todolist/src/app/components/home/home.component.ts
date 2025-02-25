import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})

export class HomeComponent implements OnInit {
  categories: any[] = [];
  userId:any = localStorage.getItem("userId");
  
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getCategoriesByUserId(this.userId).subscribe(
      (data: any) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
