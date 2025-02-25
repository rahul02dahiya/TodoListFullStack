import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers:[AuthService]
})
export class AppComponent implements OnInit{
  title = 'todolist';
  isUserLoggedIn:boolean=false;

  constructor(private router: Router, private aservice:AuthService) {}
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event:any)=>{
      this.isUserLoggedIn=this.aservice.isUserLoggedIn();
      console.log("is user logged in",this.isUserLoggedIn);
    })
  }
}
