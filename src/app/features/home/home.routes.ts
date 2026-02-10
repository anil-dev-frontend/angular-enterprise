import { Routes } from "@angular/router";
import { Home } from "../home/home/home";


export const HOME_ROUTES: Routes = [
    {
        path:'', redirectTo:'home', pathMatch:'full'
    },
    {
        path:'home', loadComponent:() => import('../home/home/home').then(m=>(Home))
    }

]