import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPackages } from './job-packages';

describe('JobPackages', () => {
  let component: JobPackages;
  let fixture: ComponentFixture<JobPackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPackages],
    }).compileComponents();

    fixture = TestBed.createComponent(JobPackages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
