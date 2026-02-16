import { Component, Input } from '@angular/core';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';

@Component({
  selector: 'app-section-header',
  imports: [SHARED_IMPORTS],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeader {

  @Input() subTitle!: string;  
  @Input() mainTitle!: string;
  // Default mein humne wahi classes rakh di jo CSS mein hain
  @Input() subClass: string = 'section-sub'; 
  @Input() mainClass: string = 'section-main';

}
