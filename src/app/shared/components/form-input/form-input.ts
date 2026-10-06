import { Component, Input, Optional, Self } from '@angular/core';

import { ControlValueAccessor, NgControl } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-input',
  standalone: true,

  imports: [MatFormFieldModule, MatInputModule, MatIconModule],

  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
})
export class FormInput implements ControlValueAccessor {
  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() prefixIcon = '';
  @Input() required = false;
  @Input() showPasswordToggle = false;
  passwordVisible = false;

  value = '';

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  onChange = (value: string) => {};

  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // পরে implement করব
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.value = input.value;

    this.onChange(this.value);
  }

  handleBlur(): void {
    this.onTouched();
  }

  hasError(error: string): boolean {
    const control = this.ngControl?.control;
    console.log({
      label: this.label,
      error,
      control,
      touched: control?.touched,
      invalid: control?.invalid,
      errors: control?.errors,
    });

    return !!(control && control.touched && control.hasError(error));
  }

  get inputType(): string {
    if (this.type == 'password') {
      return this.passwordVisible ? 'text' : 'password';
    }
    return this.type;
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
