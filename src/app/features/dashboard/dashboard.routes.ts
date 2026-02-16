import { Routes } from "@angular/router";
import { DashboardLayout } from "./dashboard-layout/dashboard-layout";



export const dashboardRoutes: Routes = [
    {
        path:'dashboard',
        component:DashboardLayout,
        children:[
            {
                path:'',
                loadComponent:()=> import('../dashboard/components/dashboard-home/dashboard-home').then(m=>m.DashboardHome)
            },
            {
                path:'users',
                loadComponent:()=> import('../dashboard/components/user-profile/user-profile').then(m=>m.UserProfile)
            },
            {
                path:'users-list',
                loadComponent:()=> import('../dashboard/components/user-list/user-list').then(m=>m.UserList)
            },
            {
                path:'profile',
                loadComponent:()=> import('../dashboard/components/user-profile/user-profile').then(m=>m.UserProfile)
            },
            {
                path:'change-password',
                loadComponent:()=> import('../dashboard/components/change-password/change-password').then(m=>m.ChangePassword)
            },

        ]
    }
]