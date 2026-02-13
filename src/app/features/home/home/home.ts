import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then(AOS => {
        AOS.default.init({ once: true });
      });
    }
  }}
