import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateRange } from '../../models/date.model';

@Component({
  selector: 'app-date-range-input',
  templateUrl: './date-range-input.component.html',
  styles: [],
})
export class DateRangeInputComponent {
  @Input() formGroup!: FormGroup;

  @Output() dateChange: EventEmitter<DateRange> = new EventEmitter<DateRange>();


  get startDate(): FormControl {
    return this.formGroup.get('startDate') as FormControl;
  }

  get endDate(): FormControl {
    return this.formGroup.get('endDate') as FormControl;
  }

  onChange(): void {
    this.dateChange.emit({
      startDate: this.startDate.value,
      endDate: this.endDate.value,
    });
  }
}
