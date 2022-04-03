import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent implements OnChanges {
  @Input() chartDataSets?: number[] | null = [];
  @Input() pointLabels?: string[] | null = [];
  @Input() pointColours?: string[] | null;
  @Input() yDataLabel?: string = 'Data';
  @Input() yMax?: number;
  @Input() yMin?: number;

  lineChartData: ChartConfiguration['data'] = {
    datasets: [{ data: this.chartDataSets ?? [] }],
  };
  lineChartOptions: ChartConfiguration['options'];
  lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.chartDataSets?.currentValue) {
      this.lineChartData = {
        datasets: [
          {
            data: changes.chartDataSets.currentValue ?? [],
            label: this.yDataLabel,
            backgroundColor: 'rgba(0,255,0,0.3)',
            borderColor: 'green',
            pointBackgroundColor: this.pointColours ?? 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            pointRadius: 5,
            pointBorderWidth: 2,
            fill: 'origin',
          },
        ],
        labels: this.pointLabels as string[],
      };

      this.lineChartOptions = {
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            title: { display: true, text: this.yDataLabel },
            max: this.yMax,
            min: this.yMin,
          },
        },
      };
    }
  }

  // events
  chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {}

  chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {}
}
