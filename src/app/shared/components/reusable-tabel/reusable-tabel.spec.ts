import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTabel } from './reusable-tabel';

describe('ReusableTabel', () => {
  let component: ReusableTabel;
  let fixture: ComponentFixture<ReusableTabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableTabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableTabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
