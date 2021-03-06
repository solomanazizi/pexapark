import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Farm } from '../../../shared/models/farm.model';

@Component({
  selector: 'app-farm-tile',
  templateUrl: './farm-tile.component.html',
  styleUrls: ['./farm-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmTileComponent {
  @Input() farm!: Farm;
}
