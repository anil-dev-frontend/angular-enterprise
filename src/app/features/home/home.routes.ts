import { Routes } from "@angular/router";
import { Home } from "../home/home/home";
import { HomeLayout } from "./home-layout/home-layout";


export const HOME_ROUTES: Routes = [

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
  },
  {path:'contact',loadComponent:() => import('../../shared/components/contact-us/contact-us').then(m => m.ContactUs)}

]