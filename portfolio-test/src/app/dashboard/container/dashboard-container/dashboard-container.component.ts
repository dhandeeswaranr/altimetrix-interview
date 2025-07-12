import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../../../services/communication-service.service';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dashboard-container',
  standalone: false,
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent implements OnInit{

  dashboardData:any = []
  label:any = []
  dataVal:any = []

  constructor(private service:CommunicationServiceService){

  }

  ngOnInit(): void {
    this.getDashboardData();
    this.renderChart();
  }


  getDashboardData(){
    console.log('call')
    this.service.getDashBoardData().subscribe((val:any) =>{
      if(val){
        console.log("val", val)
          this.dashboardData = val;
          val.map((val:any) => {
              this.label.push(val['invsetmentName']);
              this.dataVal.push(val['totalInvestment'])
          })
      }
    })
  }

  renderChart(){
    console.log("tt", this.label)
    const ctx:any = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: this.label,//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'of Investments',
        data: this.dataVal,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

}
