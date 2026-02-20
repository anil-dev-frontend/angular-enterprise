import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Sidebar } from '@features/dashboard/sidebar/sidebar';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { Footer } from '@shared/components/footer/footer';
import { Header } from '@shared/components/header/header';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SHARED_IMPORTS],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-enterprise');

  isDashboard = false;

  constructor(private router: Router) {
    this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isDashboard = event.url.startsWith('/dashboard');
      });
  }
}

