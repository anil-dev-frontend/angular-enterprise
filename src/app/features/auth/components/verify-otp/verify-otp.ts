import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@features/auth/auth-service/auth';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';

@Component({
  selector: 'app-verify-otp',
  imports: [SHARED_IMPORTS],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOtp {

otpForm!: FormGroup;
  isSubmitted = false;
  email = '';

  constructor(
    private fb: FormBuilder,
     private authService: Auth, 
     private router: Router) {}

  ngOnInit() {
    this.email = history.state.email || '';
    this.initOtpForm(); 
  }

private initOtpForm() {
  this.otpForm = this.fb.group({
    otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
}
  resendOtp() {
    if (!this.email) return;
    this.authService.sendResetOtp(this.email).subscribe({
      next: () => alert('OTP resent successfully'),
      error: () => alert('Failed to resend OTP')
    });
  }


  submit() {
    this.isSubmitted = true;
    if (this.otpForm.invalid) return;

    const payload = {
      email: this.email,
      otp: this.otpForm.value.otp,
      newPassword: this.otpForm.value.newPassword
    };

    this.authService.verifyOtpResetPassword(payload).subscribe((res: any) => {
      let message = '';
      let isSuccess = false;
      //  JSON try–catch
      try {
        const json = JSON.parse(res);
        message = json.message || '';
        isSuccess = json.result === true;
      } catch {
        //  Response plain text string
        message = res?.toString().trim();
        // Success check (string based)
        if (message.toLowerCase().includes('success')) {
          isSuccess = true;
        }
      }
      //  Show message according to success/fail
      if (isSuccess) {
        alert(message || 'Password reset successful');
        this.router.navigate(['/login']);
      } else {
        alert(message || 'OTP verification failed');
      }
    });
  }


}

