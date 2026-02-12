import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginModel } from '@core/models/login.model';
import { Auth } from '@features/auth/auth-service/auth';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';

@Component({
  selector: 'app-login',
  imports: [SHARED_IMPORTS],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  loginForm!: NgForm;

  loginData: LoginModel = {
    emailId: '',
    password: ''
  };

  constructor(private authServices:Auth) { }

  ngOnInit(): void {

  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.authServices.login(this.loginData).subscribe({next: (res:any) =>{
        if (res.result === true) {
          alert(res.message);  // Login Success

          // Save token
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('refreshToken', res.data.refreshToken);

          // Save user data
          localStorage.setItem('user', JSON.stringify(res.data));
          //this.router.navigate(['/dashboard']); 

        } else {
          alert(res.message); // Invalid user or wrong password
        }
      },error: err =>{
        console.log(err)
      }
    })
    }
  }

}
