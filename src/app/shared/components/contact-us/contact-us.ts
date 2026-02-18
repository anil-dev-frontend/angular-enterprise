import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgSelectModule } from '@ng-select/ng-select';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import countries from 'world-countries';

@Component({
  selector: 'app-contact-us',
  imports: [SHARED_IMPORTS, GoogleMapsModule, NgSelectModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs implements OnInit, AfterViewInit {

 @ViewChild('countrySelect', { static: false }) selectRef: any;

  private fb = inject(FormBuilder);
  countriesList: any[] = [];
  contactForm: any
  display: any;

  center: google.maps.LatLngLiteral = {
    lat: 22.2736308,
    lng: 70.7512555
  };
  zoom = 6;

  ngAfterViewInit() {
      const input =
        this.selectRef.element.querySelector('.ng-input input');
      if (input) {
        //input.setAttribute('placeholder', 'Search country');
      }
    }

  ngOnInit(): void {
    this.initForm();
    this.loadCountries();
  }

  

  /*------------------------------------------moveMap()-------------*/
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  /*-------------------move() --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  private initForm(): void {
  this.contactForm = this.fb.group({
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dialCode: ['+91', Validators.required],
    phone: ['', [
      Validators.required,
      Validators.pattern(/^[0-9]{6,15}$/)
    ]],
    message: ['']
  });
}

  private loadCountries(): void {
    this.countriesList = countries.map(c => ({
      name: c.name.common,
      dialCode: '' + c.idd.root + (c.idd.suffixes?.[0] || ''),
      flag: c.flag
    }))
      .filter(c => c.dialCode !== '+');
  }

  customCountrySearch(term: string, item: any): boolean {
    term = term.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.dialCode.includes(term) ||
      item.code.toLowerCase().includes(term)
    );
  }


  submit(): void {
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }
  console.log(this.contactForm.value);
}

}
