import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userEmail: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  login() {
      const user = {email: this.userEmail, password: this.password };
      this.authService.login(user).subscribe({
        next: (res:any) => {
          console.log("api response",res);
          if(res && res?.id){
            alert('Login successful');
          localStorage.setItem("userId",res?.id);
          localStorage.setItem("userEmail",res?.email);
            this.router.navigate(['/home']);
            console.log("Login sus");
          }
          else{
            alert("Please enter valid credentials");
          }
        },
        error: () => alert('login failed'),
      });
    
  }
}

