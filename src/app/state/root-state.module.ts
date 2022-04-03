import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducer, rootReducerFeatureKey } from './root.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './root.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(rootReducerFeatureKey, rootReducer),
    EffectsModule.forRoot([RootEffects]),
  ],
})
export class RootStateModule {}
