import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-chart-legend',
  templateUrl: './chart-legend.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartLegendComponent {
  completeTooltip: string = 'Dataset consists of 24 aggregated hourly values to produce a daily average value.';
  incompleteTooltip: string = 'Dataset is missing one or more hourly values, displayed result is an average of available hourly values in a day.';
}
