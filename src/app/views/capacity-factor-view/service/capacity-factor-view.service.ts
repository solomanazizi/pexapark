import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitsEnum } from '@app/shared/enums/units.enum';
import { Farm, FarmCapacityData } from '@app/shared/models/farm.model';
import {
  selectCapacityFactorData,
  selectDisplayedFarmData,
  selectDisplayedFarmInfo,
} from '@app/state/root.selectors';
import { select, Store } from '@ngrx/store';
import { State } from '@app/state/root.reducer';
import { filter, map, switchMap } from 'rxjs/operators';
import { loadFarmsCapacity } from '@app/state/root.actions';

@Injectable({
  providedIn: 'root',
})
export class CapacityFactorViewService {
  constructor(private store: Store<State>) {}

  buttonClick: BehaviorSubject<string> = new BehaviorSubject<string>(
    UnitsEnum.CapacityFactor
  );

  getButtonClick() {
    return this.buttonClick;
  }

  farmInfo$: Observable<Farm> = this.store.select(
    selectDisplayedFarmInfo
  ) as Observable<Farm>;

  farmTitle$: Observable<string> = this.farmInfo$.pipe(
    filter((farm) => !!farm),
    map((farm) => `${farm?.name} - ${farm?.type} power`)
  );

  capacityFactorData$: Observable<FarmCapacityData> =
    this.store.pipe(
      select(selectCapacityFactorData),
      filter((dataSets) => {
        if (!dataSets.length) {
          this.store.dispatch(loadFarmsCapacity());
        }
        return !!dataSets.length;
      }),
      switchMap(() => this.store.select(selectDisplayedFarmData)),
      filter((farmData) => !!farmData)
    ) as Observable<FarmCapacityData>;
}
