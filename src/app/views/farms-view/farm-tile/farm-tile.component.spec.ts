import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmTileComponent } from './farm-tile.component';
import { Farm } from '../../../shared/models/farm.model';

const MOCK_DATA: Farm = {
  id: 1,
  name: 'Mock Farm',
  type: 'wind',
  totalCapacity: 20,
};

describe('FarmTileComponent', () => {
  let component: FarmTileComponent;
  let fixture: ComponentFixture<FarmTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmTileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmTileComponent);
    component = fixture.componentInstance;
    component.farm = MOCK_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
