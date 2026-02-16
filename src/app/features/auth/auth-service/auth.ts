import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '@core/models/login.model';
import { Generic } from '@core/services/generic-service/generic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private baseUrl = 'https://api.freeprojectapi.com/api/UserApp';

  constructor(private http: HttpClient, private api: Generic){}

  //SignUp
  signUp(data:any){
    return this.api.post(`${this.baseUrl}/CreateNewUser`,data)
  }

  //Login
  login(payload: LoginModel){
    return this.api.post(`${this.baseUrl}/login`,payload)
  }

   // ● FORGOT PASSWORD
  sendResetOtp(emailId: string) {
    return this.api.post(`${this.baseUrl}/send-reset-otp?emailId=${emailId}`, {});
  }

  // ● VERIFY OTP AND RESET PASSWORD
  //   verifyOtpResetPassword(data: { email: string; otp: string; newPassword: string }) {
  //   return this.api.post(`${this.baseUrl}/verify-otp-reset-password`, data);
  // }


  verifyOtpResetPassword(data: { email: string; otp: string; newPassword: string }) {
    return this.http.post(
      `${this.baseUrl}/verify-otp-reset-password`,
      data,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'text'
      }
    ) as Observable<string>;
  }
  
  //UPDATE PASSWORD


updatePassword(customerId: number, data: { existingPassword: string; newPassword: string }) {
  return this.http.put(
    `${this.baseUrl}/update-password?customerId=${customerId}`,
    data,
    { responseType: 'text' }  
  );
}
  // ● GET USER
  getAllUsers() {
    return this.api.get(`${this.baseUrl}/GetAllUsers`);
  }
}
