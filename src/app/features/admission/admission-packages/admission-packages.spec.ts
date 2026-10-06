import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionPackages } from './admission-packages';

describe('AdmissionPackages', () => {
  let component: AdmissionPackages;
  let fixture: ComponentFixture<AdmissionPackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionPackages],
    }).compileComponents();

    fixture = TestBed.createComponent(AdmissionPackages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
