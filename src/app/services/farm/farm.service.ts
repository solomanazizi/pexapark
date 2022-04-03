import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Farm, FarmCapacityData } from '../../shared/models/farm.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmService {
  constructor(private http: HttpClient) {}

  getFarms(): Observable<Farm[]> {
    return this.http.get<Farm[]>('http://localhost:3000/farms');
  }

  getFarmsCapcityFactor(): Observable<FarmCapacityData[]> {
    return this.http.get<FarmCapacityData[]>('http://localhost:3000/capacity');
  }
}
