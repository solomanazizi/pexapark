import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Label } from '@app/shared/models/label.model';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleComponent {
  @Input() buttons: Label[] = [];
  @Input() initialButton?: Label;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  onChange(buttonValue: string): void {
    this.change.emit(buttonValue);
  }
}
