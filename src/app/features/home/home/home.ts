import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { isPlatformBrowser } from '@angular/common';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { Features } from '../components/features/features';
import { Faq } from '../components/faq/faq';
import { FeaturesTwo } from '../components/features-two/features-two';

@Component({
  selector: 'app-home',
  imports: [SHARED_IMPORTS,Features,Faq,Carousel,FeaturesTwo],
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
