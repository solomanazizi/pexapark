import { createReducer, on } from '@ngrx/store';
import * as rootActions from './root.actions';
import { Farm, FarmCapacityData } from '../shared/models/farm.model';

export const rootReducerFeatureKey = 'rootReducer';

export interface State {
  farms: Farm[];
  farmsCapacityFactorData: FarmCapacityData[];
  currentDisplayedFarm: FarmCapacityData | undefined;
  currentFarmId: number | undefined;
}

export const initialState: State = {
  farms: [],
  farmsCapacityFactorData: [],
  currentDisplayedFarm: undefined,
  currentFarmId: undefined,
};

export const rootReducer = createReducer(
  initialState,

  on(rootActions.loadFarmsSuccess, (state, { response }) => ({
    ...state,
    farms: response,
  })),

  on(rootActions.loadFarmsCapacitySuccess, (state, { response }) => ({
    ...state,
    farmsCapacityFactorData: response,
  })),

  on(rootActions.setDisplayedFarmId, (state, { farmId }) => ({
    ...state,
    currentFarmId: farmId,
    currentDisplayedFarm:
      state.farmsCapacityFactorData.find((data) => data.farmId === farmId) ??
      undefined,
  }))
);
