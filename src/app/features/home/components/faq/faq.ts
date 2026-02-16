import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { SectionHeader } from '@shared/components/section-header/section-header';

@Component({
  selector: 'app-faq',
  imports: [SHARED_IMPORTS,SectionHeader],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
//activeIndex me wo index rahega jo filhal open hai
  activeIndex: number | null = 0; // By default pehla open rahega

  faqList = [
    {
      question: 'Pre and post launch mobile app marketing pitfalls to avoid',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
    },
    {
      question: 'Boostup your application traffic is just a step away',
      answer: 'Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'
    },
    {
      question: 'How to update application new features',
      answer: 'Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them.'
    }
  ];

  toggleAccordion(index: number) {
    // Agar wahi click kiya jo open hai to close kar do, warna naya open karo
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
