import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { RootEffects } from './root.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('RootEffects', () => {
  let actions$: Observable<any>;
  let effects: RootEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RootEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
      ],
      imports: [HttpClientTestingModule],
    });

    effects = TestBed.inject(RootEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
