import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { FormInput } from '../../../shared/components/form-input/form-input';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormInput,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit(): void {
    if (this.loginForm.invalid) {
      console.log('Form:', this.loginForm);
      console.log('Form value:', this.loginForm.value);
      console.log('Form errors:', {
        email: this.loginForm.controls.email.errors,
        password: this.loginForm.controls.password.errors,
      });

      this.loginForm.markAllAsTouched();
      return;
    }

    console.log('Login Data:', this.loginForm.value);
  }
}
