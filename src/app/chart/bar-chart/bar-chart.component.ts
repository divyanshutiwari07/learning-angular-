import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private testService:TestService) { }

  ngOnInit() {
    //random color on chart
    Chart.pluginService.register(this.testService.getRandomColor());
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      label: 'Series B',
      data: [28, 48, 40, 19, 86, 27, 90]
    },
    {
      label: 'Series A',
      data: [65, 59, 80, 81, 56, 55, 40] 
    }
    
  ];

  public barChartColors = [
    {
      
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1
    },
    { 
      //did not work color on second bar 
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1
    }
    
  ];
  
}
