import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [SHARED_IMPORTS],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

isScrolled = false;
isHomePage = true;

  constructor(private router: Router) {
    // URL change hone par check karein ki kya ye home page hai
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHomePage = event.url === '/' || event.url === '/home';
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}