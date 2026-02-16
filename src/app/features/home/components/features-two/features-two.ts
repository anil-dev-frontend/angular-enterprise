import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { SectionHeader } from '@shared/components/section-header/section-header';

@Component({
  selector: 'app-features-two',
  imports: [SHARED_IMPORTS,SectionHeader],
  templateUrl: './features-two.html',
  styleUrl: './features-two.scss',
})
export class FeaturesTwo {

}
