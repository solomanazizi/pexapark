import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import * as rootActions from './root.actions';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { FarmService } from '@app/services/farm/farm.service';
import { State } from './root.reducer';
import { selectCapacityFactorData, selectFarms } from './root.selectors';

@Injectable()
export class RootEffects {
  loadFarms$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(rootActions.loadFarms),
      withLatestFrom(this.store.select(selectFarms)),
      filter(([, farms]) => !farms.length),
      switchMap(() => this.farmService.getFarms()),
      map((response) => rootActions.loadFarmsSuccess({ response }))
    )
  );

  loadFarmCapacityFactor$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(rootActions.loadFarmsCapacity),
      withLatestFrom(this.store.select(selectCapacityFactorData)),
      filter(([, data]) => !data.length),
      switchMap(() => this.farmService.getFarmsCapcityFactor()),
      map((response) => rootActions.loadFarmsCapacitySuccess({ response }))
    )
  );

  constructor(
    private actions$: Actions,
    private farmService: FarmService,
    private store: Store<State>
  ) {}
}
