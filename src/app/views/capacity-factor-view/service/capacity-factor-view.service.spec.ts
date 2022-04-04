import { TestBed } from '@angular/core/testing';
import { CapacityFactorViewService } from './capacity-factor-view.service';
import {provideMockStore} from "@ngrx/store/testing";

describe('CapacityFactorViewService', () => {
  let service: CapacityFactorViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()]
    });
    service = TestBed.inject(CapacityFactorViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
