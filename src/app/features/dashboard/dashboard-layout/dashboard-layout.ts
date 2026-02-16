import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@shared/components/footer/footer';
import { Header } from '@shared/components/header/header';
import { Sidebar } from '../sidebar/sidebar';


@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet,Header,Footer,Sidebar],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayout implements OnInit, OnDestroy,AfterViewInit  {

 ngAfterViewInit() {
  const navbar = document.querySelector('.navbar') as HTMLElement;
  if (navbar) {
    document.documentElement.style.setProperty(
      '--header-height',
      `${navbar.offsetHeight}px`
    );
  }
  document.body.classList.add('dashboard-layout');
}

ngOnDestroy() {
  document.body.classList.remove('dashboard-layout');
}
  ngOnInit(): void {
    
  }
}


