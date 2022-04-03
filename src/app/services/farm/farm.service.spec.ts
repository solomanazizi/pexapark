import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FarmService } from './farm.service';

describe('FarmService', () => {
  let service: FarmService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(FarmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
