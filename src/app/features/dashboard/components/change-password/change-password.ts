import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@features/auth/auth-service/auth';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';

@Component({
  selector: 'app-change-password',
  imports: [SHARED_IMPORTS],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePassword implements OnInit {

changePassForm!: FormGroup;
  isSubmitted = false;
  user: any;

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.createForm();
  }

  createForm() {
    this.changePassForm = this.fb.group({
      existingPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    this.isSubmitted = true;

    if (this.changePassForm.invalid) return;

    const payload = this.changePassForm.value;

    this.auth.updatePassword(this.user.userId, payload)
      .subscribe({
        next: (res: string) => {
          alert(res || 'Password updated successfully!');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          alert(err.error || 'Failed! Wrong old password.');
        }
      });
  }
}