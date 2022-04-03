import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { FlexModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from '../controls/material.module';

@NgModule({
  declarations: [LineChartComponent],
  imports: [CommonModule, FlexModule, NgChartsModule, MaterialModule],
  exports: [LineChartComponent],
})
export class ChartsModule {}
