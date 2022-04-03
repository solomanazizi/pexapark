import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CapacityFactorViewComponent } from './capacity-factor-view.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import {
  selectCapacityFactorData,
  selectDisplayedFarmData,
  selectDisplayedFarmInfo,
} from '@app/state/root.selectors';
import { TestScheduler } from 'rxjs/testing';
import {RunHelpers} from "rxjs/internal/testing/TestScheduler";
import {of} from "rxjs";

const MOCK_CAPACITY_FACTOR_DATA = [
  {
    value: 0.1,
    date: '01/01/2022',
    completeDataSet: true,
  },
  {
    value: 0.2,
    date: '01/02/2022',
    completeDataSet: true,
  },
  {
    value: 0.3,
    date: '01/03/2022',
    completeDataSet: false,
  },
];

describe('EnergyDataComponent', () => {
  let component: CapacityFactorViewComponent;
  let fixture: ComponentFixture<CapacityFactorViewComponent>;
  let activatedRouteSpy = {
    snapshot: { paramMap: convertToParamMap({ id: 2 }) },
  };
  let router: Router;
  let scheduler: TestScheduler;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CapacityFactorViewComponent],
      providers: [
        FormBuilder,
        provideMockStore({
          selectors: [
            {
              selector: selectCapacityFactorData,
              value: [
                {
                  farmId: 1,
                  capacityFactorData: MOCK_CAPACITY_FACTOR_DATA,
                },
              ],
            },
            {
              selector: selectDisplayedFarmData,
              value: {
                farmId: 1,
                capacityFactorData: MOCK_CAPACITY_FACTOR_DATA,
              },
            },
            {
              selector: selectDisplayedFarmInfo,
              value: { id: 1, name: 'Farm Name', type: 'wind', capacity: 10 },
            },
          ],
        }),
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityFactorViewComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    scheduler = new TestScheduler((actual, expected) =>
      expect(actual).toEqual(expected)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to farms overview', () => {
    let farmButton = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(farmButton).toBeTruthy();

    spyOn(router, 'navigate');
    farmButton.click();

    expect(router.navigate).toHaveBeenCalledWith([`./farms`]);
  });
});
