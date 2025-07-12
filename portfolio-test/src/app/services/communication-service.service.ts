import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  mockDashboarData:any = [{
            id: 1, 
            investmentType: 'Gold', 
            invsetmentName: 'tcs', 
            invsetmentPrice: '100', 
            quantity: '1',
            totalInvestment:'100'
            },
            {
            id: 2, 
            investmentType: 'Mutual Fund', 
            invsetmentName: 'tcs', 
            invsetmentPrice: '100', 
            quantity: '1',
            totalInvestment:'100'
            }

          ]

  private dashboarData = new BehaviorSubject<any>(this.mockDashboarData);
  private dashboarData$ = this.dashboarData.asObservable()

  constructor() { }

  setDashBoardData(data:any){
    this.dashboarData.next(data)
  }


  getDashBoardData(){
    return this.dashboarData
  }

}
