import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '@app/state/root.reducer';
import { Store } from '@ngrx/store';
import {
  loadFarms,
  setDisplayedFarmId,
} from '@app/state/root.actions';
import {filter, map, startWith, tap} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {
  DailyCapacityFactor,
  Farm,
  FarmCapacityData,
} from '@app/shared/models/farm.model';
import { UnitsEnum } from '@app/shared/enums/units.enum';
import { Label } from '@app/shared/models/label.model';
import { CapacityFactorViewService } from '@app/views/capacity-factor-view/service/capacity-factor-view.service';

@Component({
  selector: 'app-capacity-factor-view',
  templateUrl: './capacity-factor-view.component.html',
  styleUrls: ['./capacity-factor-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapacityFactorViewComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  });
  yMax: number = 1;
  yDataLabel: string = UnitsEnum.CapacityFactor;
  toggleButtons: Label[] = [
    {
      label: UnitsEnum.CapacityFactor,
      value: UnitsEnum.CapacityFactor,
    },
    {
      label: 'Energy Produced',
      value: UnitsEnum.MegaWattHours,
    },
  ];

  buttonClick$: BehaviorSubject<string> = new BehaviorSubject<string>(
    UnitsEnum.CapacityFactor
  );
  unitsChange$ = this.buttonClick$.asObservable();

  farmInfo$: Observable<Farm> = this.capacityFactorService.farmInfo$;

  farmTitle$: Observable<string> = this.capacityFactorService.farmTitle$;

  capacityFactorData$: Observable<FarmCapacityData> =
    this.capacityFactorService.capacityFactorData$;

  dateFilter$: Observable<any> =
    this.formGroup.controls.endDate.valueChanges.pipe(
      filter((endDate) => !!endDate),
      map((endDate) => ({
        startDate: this.formGroup.controls.startDate.value,
        endDate: endDate,
      })),
      startWith(null)
    );

  filteredCapacityFactorData$ = combineLatest(
    this.capacityFactorData$,
    this.dateFilter$
  ).pipe(
    map(([data, dateRange]) =>
      !!dateRange?.startDate && !!dateRange?.endDate
        ? {
            ...data,
            capacityFactorData:
              data?.capacityFactorData.filter(
                (point: DailyCapacityFactor) =>
                  new Date(point.date) >= dateRange.startDate &&
                  new Date(point.date) <= dateRange.endDate
              ) ?? [],
          }
        : data
    )
  );

  farmCapacityFactorValues$: Observable<number[] | undefined> = combineLatest(
    this.filteredCapacityFactorData$,
    this.unitsChange$,
    this.farmInfo$
  ).pipe(
    map(([data, units, farm]) => {
      this.yMax = units === UnitsEnum.CapacityFactor ? 1 : farm!.totalCapacity;
      this.yDataLabel =
        units === UnitsEnum.CapacityFactor
          ? UnitsEnum.CapacityFactor
          : `Energy (${UnitsEnum.MegaWattHours})`;
      return data?.capacityFactorData.map((item: DailyCapacityFactor) =>
        units === UnitsEnum.CapacityFactor
          ? item.value
          : item.value * farm!.totalCapacity
      );
    })
  );

  farmCapacityFactorLabels$: Observable<string[] | undefined> =
    this.filteredCapacityFactorData$.pipe(
      map((data) =>
        data?.capacityFactorData.map((item: DailyCapacityFactor) => item.date)
      )
    );

  farmCapacityFactorPointColours$ = this.filteredCapacityFactorData$.pipe(
    map((data) =>
      data?.capacityFactorData.map((item: DailyCapacityFactor) =>
        item.completeDataSet ? 'blue' : 'red'
      )
    )
  );

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private route: ActivatedRoute,
    public router: Router,
    private capacityFactorService: CapacityFactorViewService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      setDisplayedFarmId({
        farmId: parseInt(this.route.snapshot.paramMap.get('id') as string),
      })
    );
    this.store.dispatch(loadFarms());
  }
}
