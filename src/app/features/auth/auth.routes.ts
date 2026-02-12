import { Routes } from "@angular/router";


export const AUTH_ROUTES: Routes = [
    {
        path:'login',
        loadComponent:() => import('../auth/components/login/login').then(m =>m.Login)
    },
    {
        path:'signup',
        loadComponent:() => import('../auth/components/signup/signup').then(m => m.Signup)
    },
    {
        path:'forget-password',
        loadComponent:() => import('../auth/components/forget-password/forget-password').then(m => m.ForgetPassword)
    },
    {
        path:'verify-otp',
        loadComponent:() => import('../auth/components/verify-otp/verify-otp').then(m => m.VerifyOtp)
    }
    
]