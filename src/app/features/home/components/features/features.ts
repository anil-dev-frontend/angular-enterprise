import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { SectionHeader } from '@shared/components/section-header/section-header';

@Component({
  selector: 'app-features',
  imports: [SHARED_IMPORTS,SectionHeader],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
features = [
  {
    title: 'Data Privacy',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: 'bi-file-earmark-lock',
    color: 'blue',
    borderClass: 'border-blue' // Naya class add kiya
  },
  {
    title: 'Analytics Security',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: 'bi-shield-check',
    color: 'orange',
    borderClass: 'border-orange'
  },
  {
    title: 'Customizability',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: 'bi-gear',
    color: 'pink',
    borderClass: 'border-pink'
  }
];
}
