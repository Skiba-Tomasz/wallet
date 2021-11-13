import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvestmentGroupDto } from '../dto/InvestmentGroupDto'

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {
  private apiUrl = 'http://localhost:3000/investments';

  constructor(private client: HttpClient) { }

  getInvestments(): Observable<InvestmentGroupDto[]>{
    return this.client.get<InvestmentGroupDto[]>(this.apiUrl);
  }
}
