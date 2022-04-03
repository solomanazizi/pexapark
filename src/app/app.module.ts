import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FarmsViewModule } from './views/farms-view/farms-view.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RootStateModule } from './state/root-state.module';
import { CapacityFactorViewModule } from './views/capacity-factor-view/capacity-factor-view.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FarmsViewModule,
    HttpClientModule,
    RootStateModule,
    StoreModule.forRoot({}),
    CapacityFactorViewModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
