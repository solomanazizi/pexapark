import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsViewComponent } from './farms-view.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FarmTileComponent } from './farm-tile/farm-tile.component';
import { MaterialModule } from '@app/shared/controls/material.module';

@NgModule({
  declarations: [FarmsViewComponent, FarmTileComponent],
  imports: [CommonModule, FlexModule, MaterialModule, FlexLayoutModule],
  exports: [FarmsViewComponent],
})
export class FarmsViewModule {}
