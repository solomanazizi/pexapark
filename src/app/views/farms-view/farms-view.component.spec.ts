import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmsViewComponent } from './farms-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { selectFarms } from '../../state/root.selectors';
import { State } from '../../state/root.reducer';
import { MemoizedSelector } from '@ngrx/store';
import { Farm } from '../../shared/models/farm.model';
import { By } from '@angular/platform-browser';
import { FarmsViewModule } from './farms-view.module';
import { Router } from '@angular/router';

describe('FarmsViewComponent', () => {
  let component: FarmsViewComponent;
  let fixture: ComponentFixture<FarmsViewComponent>;
  let mockStore: MockStore<State>;
  let mockSelectFarmsResult: MemoizedSelector<State, Farm[]>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmsViewComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FarmsViewModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmsViewComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockSelectFarmsResult = mockStore.overrideSelector(selectFarms, []);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a tile for each farm', () => {
    let farmTiles = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(farmTiles.length).toBeFalsy();

    const mockData: Farm[] = [
      { id: 1, name: 'Wind Farm', type: 'wind', totalCapacity: 10 },
      { id: 2, name: 'Solar Farm', type: 'solar', totalCapacity: 15 },
    ];

    mockSelectFarmsResult.setResult(mockData);
    mockStore.refreshState();
    fixture.detectChanges();
    farmTiles = fixture.debugElement.queryAll(By.css('mat-card'));
    expect(farmTiles.length).toBe(mockData.length);
  });

  it('should navigate to farm chart', () => {
    const mockData: Farm[] = [
      { id: 1, name: 'Wind Farm', type: 'wind', totalCapacity: 10 },
    ];
    mockSelectFarmsResult.setResult(mockData);
    mockStore.refreshState();
    fixture.detectChanges();
    let farmTile = fixture.debugElement.query(By.css('mat-card')).nativeElement;
    expect(farmTile).toBeTruthy();

    spyOn(router, 'navigate');
    farmTile.click();

    expect(router.navigate).toHaveBeenCalledWith([`energy/${mockData[0].id}`]);
  });
});
