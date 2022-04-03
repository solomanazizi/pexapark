import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '@app/state/root.reducer';
import { selectFarms } from '@app/state/root.selectors';
import {
  loadFarms,
  loadFarmsCapacity,
  setDisplayedFarmId,
} from '@app/state/root.actions';
import { Farm } from '@app/shared/models/farm.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farms-view',
  templateUrl: './farms-view.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FarmsViewComponent implements OnInit {
  farms$: Observable<Farm[]> = this.store.pipe(select(selectFarms));

  constructor(
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadFarms());
    this.store.dispatch(loadFarmsCapacity());
  }

  onFarmClick(farmId: number): void {
    this.store.dispatch(setDisplayedFarmId({ farmId: farmId }));
    this.router.navigate([`energy/${farmId}`]);
  }
}
