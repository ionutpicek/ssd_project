import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth'; // Import Firebase Auth
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class CreateAccountComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';
  successMessage: string = '';

  constructor(private auth: Auth, private router: Router) {}

  createAccount() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match!';
      return;
    }

    // Firebase Authentication - Create User
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        this.successMessage = 'Account created successfully! Please log in.';
        this.error = '';
        // Redirect to login page after success (optional)
        setTimeout(() => this.router.navigate(['/login']), 2000);
      })
      .catch((err) => {
        this.error = 'Failed to create account. Please try again.';
        console.error(err);
      });
  }
}
