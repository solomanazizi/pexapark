import { createFeatureSelector, createSelector } from '@ngrx/store';
import { rootReducerFeatureKey, State } from './root.reducer';

export const getRootState = createFeatureSelector<State>(rootReducerFeatureKey);

export const selectFarms = createSelector(getRootState, (state) => state.farms);

export const selectDisplayedFarmData = createSelector(getRootState, (state) =>
  state.farmsCapacityFactorData.find(
    (farmData) => farmData.farmId === state.currentFarmId
  )
);

export const selectCapacityFactorData = createSelector(
  getRootState,
  (state) => state.farmsCapacityFactorData
);

export const selectDisplayedFarmInfo = createSelector(getRootState, (state) =>
  state.farms.find((farm) => farm.id === state.currentFarmId)
);
