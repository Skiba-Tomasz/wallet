import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinearGraphDataDto } from '../dto/LinearGraphDataDto';

@Injectable({
  providedIn: 'root'
})
export class GraphSeriesService {

  private apiUrl: string = 'http://localhost:3000/price';

  constructor(private client: HttpClient) { }

  getSeries(symbol: string): Observable<LinearGraphDataDto>{
    return this.client.get<LinearGraphDataDto>(`${this.apiUrl}/${symbol}`);
  }
}
