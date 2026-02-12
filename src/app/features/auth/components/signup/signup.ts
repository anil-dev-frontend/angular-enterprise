import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '@features/auth/auth-service/auth';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { matchPasswordValidator } from '@shared/validators/password-match.validator';

@Component({
  selector: 'app-signup',
  imports: [SHARED_IMPORTS],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup implements OnInit {

  signupForm!: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router,) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: matchPasswordValidator('password', 'confirmPassword')
    });

  }

  get f() {
    return this.signupForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    //confirmPassword ko payload se remove karo
    const { confirmPassword, ...payload } = this.signupForm.value;
    this.authService.signUp(payload).subscribe({
      next: (res: any) => {
        if (res.result === true) {
          alert(res.message);
          this.signupForm.reset();
        } else {
          alert(res.message);
        }
      }, error: (err) => {
        console.error('Signup Failed', err);
      }
    })
  }


}
