import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = { 
        lastName: this.lastName,
        firstName: this.firstName,
        email: this.email,
        password: this.password
    };
    this.authService.register(user).subscribe({
      next: (res) => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: () => alert('Registration failed'),
    });
  }
}
