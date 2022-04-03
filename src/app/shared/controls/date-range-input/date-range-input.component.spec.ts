import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeInputComponent } from './date-range-input.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('DateRangeInputComponent', () => {
  let component: DateRangeInputComponent;
  let fixture: ComponentFixture<DateRangeInputComponent>;
  let mockFormGroupInput: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateRangeInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangeInputComponent);
    component = fixture.componentInstance;
    mockFormGroupInput = new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl(''),
    });
    component.formGroup = mockFormGroupInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
