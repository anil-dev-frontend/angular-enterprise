import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTwo } from './features-two';

describe('FeaturesTwo', () => {
  let component: FeaturesTwo;
  let fixture: ComponentFixture<FeaturesTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
