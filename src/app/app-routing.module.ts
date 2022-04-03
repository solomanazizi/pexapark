import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmsViewComponent } from './views/farms-view/farms-view.component';
import { CapacityFactorViewComponent } from './views/capacity-factor-view/capacity-factor-view.component';

const routes: Routes = [
  {
    path: 'farms',
    component: FarmsViewComponent,
  },
  {
    path: 'energy/:id',
    component: CapacityFactorViewComponent,
  },
  {
    path: '**',
    redirectTo: '/farms',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
