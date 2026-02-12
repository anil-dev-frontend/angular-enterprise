import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@features/auth/auth-service/auth';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';

@Component({
  selector: 'app-forget-password',
  imports: [SHARED_IMPORTS],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss',
})
export class ForgetPassword implements OnInit {

forgotPasswordForm!: FormGroup;


  constructor(
    private fb: FormBuilder, 
    private authService: Auth, 
    private router: Router) 
    {
    
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
  this.forgotPasswordForm = this.fb.group({
        emailId: ['', [Validators.required, Validators.email]]
      });
    }

    get f() {
  return this.forgotPasswordForm.controls;
}

  onSubmit() {

    if (this.forgotPasswordForm.invalid) {
    this.forgotPasswordForm.markAllAsTouched(); 
    return;
  }

    this.authService.sendResetOtp(this.forgotPasswordForm.value.emailId).subscribe({
      next: () => {
        alert('OTP sent to your email');
        this.router.navigate(['/verify-otp'], { state: { email: this.forgotPasswordForm.value.emailId } });
      },
      error: (err) => {
        alert(err.error.message || 'Failed to send OTP');
      }
    });
  }
}