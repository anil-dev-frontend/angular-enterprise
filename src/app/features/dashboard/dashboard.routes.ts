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
            }
        ]
    }
]