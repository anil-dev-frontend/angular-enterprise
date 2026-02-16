import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableModal } from './reusable-modal';

describe('ReusableModal', () => {
  let component: ReusableModal;
  let fixture: ComponentFixture<ReusableModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
