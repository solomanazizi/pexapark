import { TestBed } from '@angular/core/testing';
import { CapacityFactorViewService } from './capacity-factor-view.service';

describe('CapacityFactorViewService', () => {
  let service: CapacityFactorViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacityFactorViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
