import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormInput } from '../../../shared/components/form-input/form-input';

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,

    FormInput,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm = new FormGroup(
    {
      fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

      confirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validators: this.passwordMatchValidator,
    },
  );

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (!password || !confirmPassword) {
      return null;
    }
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.snackBar.open('Please fix the errors in the form.', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }
    console.log('Register Data:', this.registerForm.value);
    this.snackBar.open('Registration successful!', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    this.router.navigate(['/login']);
  }
}
