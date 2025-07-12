import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../../../services/communication-service.service';

@Component({
  selector: 'app-dashboard-container',
  standalone: false,
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent implements OnInit{

  dashboardData:any = []

  constructor(private service:CommunicationServiceService){

  }

  ngOnInit(): void {
    this.getDashboardData();
  }


  getDashboardData(){
    console.log('call')
    this.service.getDashBoardData().subscribe((val:any) =>{
      if(val){
        console.log("val", val)
          this.dashboardData = val;
      }
    })
  }

}
