import { Routes } from "@angular/router";
import { Home } from "../home/home/home";
import { HomeLayout } from "./home-layout/home-layout";


export const HOME_ROUTES: Routes = [
    // {
    //     path:'', redirectTo:'home', pathMatch:'full'
    // },
    // {
    //     path:'', loadComponent:() => import('../home/home/home').then(m=>(Home))
    // }

    {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../home/home/home')
            .then(m => m.Home)
      }
    ]
  }

]