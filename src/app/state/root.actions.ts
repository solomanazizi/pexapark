import { createAction, props } from '@ngrx/store';
import { Farm, FarmCapacityData } from '../shared/models/farm.model';

export const loadFarms = createAction('[RootActions] Load Farms');

export const loadFarmsSuccess = createAction(
  '[RootActions] Load Farms Success',
  props<{ response: Farm[] }>()
);

export const loadFarmsCapacity = createAction(
  '[RootActions] Load Farms Capacity Factor'
);

export const loadFarmsCapacitySuccess = createAction(
  '[RootActions] Load Farms Capacity Factor Success',
  props<{ response: FarmCapacityData[] }>()
);

export const setDisplayedFarmId = createAction(
  '[RootActions] Set Current Displayed Farm Id',
  props<{ farmId: number }>()
);
