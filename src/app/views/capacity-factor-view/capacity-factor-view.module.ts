import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapacityFactorViewComponent } from './capacity-factor-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/shared/controls/material.module';
import { ChartsModule } from '@app/shared/charts/charts.module';
import { FlexModule } from '@angular/flex-layout';
import { ChartLegendComponent } from './chart-legend/chart-legend.component';

@NgModule({
  declarations: [CapacityFactorViewComponent, ChartLegendComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    FlexModule,
  ],
  exports: [CapacityFactorViewComponent],
})
export class CapacityFactorViewModule {}
