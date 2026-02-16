import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, SHARED_IMPORTS, SectionHeader],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements OnInit {

  testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO & Founder',
      comment:'Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed',
      img: '/images/user-1.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager',
      comment:'Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa.',
      img: '/images/user-1.jpg'
    },
    {
      id: 3,
      name: 'Alex Johnson',
      role: 'Designer',
      comment:'Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa.',
      img: '/images/user-1.jpg'
    }
  ];



  constructor() { }

  ngOnInit(): void {

  }

  options = {
    items: 1,
    loop: true,
    dots: false,
    nav: false,
    autoplay: true
  };

  prev(owl: any) {
    owl.prev();
  }

  next(owl: any) {
    owl.next();
  }
}

