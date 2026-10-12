import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeExam } from './take-exam';

describe('TakeExam', () => {
  let component: TakeExam;
  let fixture: ComponentFixture<TakeExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeExam],
    }).compileComponents();

    fixture = TestBed.createComponent(TakeExam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
