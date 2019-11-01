import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { TestService } from '../../service/test.service';

@Component({
  selector: 'app-multiple-charts',
  templateUrl: './multiple-charts.component.html',
  styleUrls: ['./multiple-charts.component.css']
})
export class MultipleChartsComponent implements OnInit {
  LineChart:any=[];
  BarChart:any=[];
  PieChart:any=[];
  RadarChart: Chart;
  PolarChart: Chart;
  DoughnutChart: Chart;
  HorizontalChart: Chart;
  MixedChart: Chart;
  //randomColor;
  //Chart: any;
  constructor( private testService:TestService ) {  }

  
  ngOnInit() {
    //random color plugin
    // this.randomColor = ;
    Chart.pluginService.register(this.testService.getRandomColor());
   
    // Line chart:
    this.LineChart = new Chart('lineChart', {
      type: 'line',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [9,7 , 3, 5, 2, 10],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
      }]
    }, 
    options: {
      title:{
          text:"Line Chart",
          display:true,
          fontColor: '#dfdfdf'
      },
      legend: {
        labels: {            
            fontColor: '#dfdfdf'
        },
      },
      scales: {
          yAxes: [{
              ticks: {
                  maxTicksLimit: 10,
                  beginAtZero:true,
                  fontColor : "#dfdfdf",
                  fontSize : 14
              },
              gridLines:{
                color: "#3a3a3a",
                lineWidth:2,
                zeroLineColor :"#3a3a3a",
                zeroLineWidth : 2
            },
            stacked: true
          }],
          xAxes: [{
            ticks:{
                fontColor : "#dfdfdf",
                fontSize : 14
            },
            gridLines:{
                color: "#3a3a3a",
                lineWidth:2
            }
          }]
      }
    }
    });

    // Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [9,7 , 3, 5, 2, 10],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
      }]
    }, 
    options: {
      title:{
          text:"Bar Chart",
          display:true,
          fontColor: '#dfdfdf'
      },
      legend: {
        labels: {            
            fontColor: '#dfdfdf'
        },
      },
      scales: {
          yAxes: [{
              ticks: {
                  maxTicksLimit: 10,
                  beginAtZero:true,
                  fontColor : "#dfdfdf",
                  fontSize : 14
              },
              gridLines:{
                color: "#3a3a3a",
                lineWidth:2,
                zeroLineColor :"#3a3a3a",
                zeroLineWidth : 2
            },
            stacked: true
          }],
          xAxes: [{
            ticks:{
                fontColor : "#dfdfdf",
                fontSize : 14
            },
            gridLines:{
                color: "#3a3a3a",
                lineWidth:2
            }
          }]
      }
    }
    });

    //pie chart
    this.PieChart = new Chart('pieChart', {
        type: 'pie',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [9,7 , 3, 5, 2, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
      }, 
      options: {
        title:{
            text:"Pie Chart",
            display:true,
            fontColor: '#dfdfdf'
        },
        legend: {
          labels: {            
              fontColor: '#dfdfdf'
          },
        },
        scales: {
            yAxes: [{
                ticks: {
                    maxTicksLimit: 10,
                    beginAtZero:true,
                    fontColor : "#dfdfdf",
                    fontSize : 14
                },
                gridLines:{
                  color: "#3a3a3a",
                  lineWidth:2,
                  zeroLineColor :"#3a3a3a",
                  zeroLineWidth : 2
              },
              stacked: true
            }],
            xAxes: [{
              ticks:{
                  fontColor : "#dfdfdf",
                  fontSize : 14
              },
              gridLines:{
                  color: "#3a3a3a",
                  lineWidth:2
              }
            }]
        },
        responsive:false
      }
    });

    //radar chart
    this.RadarChart = new Chart('radarChart', {
      type: 'radar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [9,7 , 3, 5, 2, 10,15,14,13],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
      }]
    }, 
    options: {
      title:{
        text:"Pie Chart",
        display:true,
        fontColor: '#dfdfdf'
      },
      legend: {
          labels: {            
              fontColor: '#dfdfdf'
          },
      },
      scale: {
          gridLines: {
              color: "#3a3a3a",
          },
      },
      scales: {
          yAxes: [{
          ticks:{
              maxTicksLimit: 10,
              beginAtZero:true,
              fontColor : "#dfdfdf",
              fontSize : 14
          },
          gridLines:{
              color: "#3a3a3a",
              lineWidth:2,
              zeroLineColor :"#3a3a3a",
              zeroLineWidth : 2
          },
          stacked: true
      }],
      xAxes: [{
          ticks:{
              fontColor : "#dfdfdf",
              fontSize : 14
          },
          gridLines:{
              color: "#3a3a3a",
              lineWidth:2
          }
      }]
      },
      responsive:false
    }
    });

    //polar chart
    this.PolarChart = new Chart('polarChart', {
      type: 'polarArea',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [9,7 , 3, 5, 2, 10],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
      }]
    }, 
    options: {
      title:{
        text:"Pie Chart",
        display:true,
        fontColor: '#dfdfdf'
      },
      legend: {
          labels: {            
              fontColor: '#dfdfdf'
          },
      },
      scale: {
          gridLines: {
              color: "#3a3a3a",
          },
      },
      scales: {
          yAxes: [{
          ticks:{
              maxTicksLimit: 10,
              beginAtZero:true,
              fontColor : "#dfdfdf",
              fontSize : 14
          },
          gridLines:{
              color: "#3a3a3a",
              lineWidth:2,
              zeroLineColor :"#3a3a3a",
              zeroLineWidth : 2
          },
          stacked: true
      }],
      xAxes: [{
          ticks:{
              fontColor : "#dfdfdf",
              fontSize : 14
          },
          gridLines:{
              color: "#3a3a3a",
              lineWidth:2
          }
      }]
      },
      responsive:false
    }
    });

    //doughnut
    this.DoughnutChart = new Chart('doughnutChart', {
    type: 'doughnut',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [9,7 , 3, 5, 2, 10],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
      }]
    }, 
    options: {
      title:{
        text:"Doughnut Chart",
        display:true,
        fontColor: '#dfdfdf'
      },
      legend: {
          labels: {            
              fontColor: '#dfdfdf'
          },
      },
      scales: {
          yAxes: [{
          ticks:{
              maxTicksLimit: 10,
              beginAtZero:true,
              fontColor : "#dfdfdf",
              fontSize : 14
          },
          gridLines:{
              color: "#3a3a3a",
              lineWidth:2,
              zeroLineColor :"#3a3a3a",
              zeroLineWidth : 2
          },
          stacked: true
      }],
      xAxes: [{
          ticks:{
              fontColor : "#dfdfdf",
              fontSize : 14
          },
          gridLines:{
              color: "#3a3a3a",
              lineWidth:2
          }
        }]
        },
        responsive:false
      }
    });

    //horizontal chart
    // Bar chart:
    this.HorizontalChart = new Chart('horizontalChart', {
      type: 'horizontalBar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [9,7 , 3, 5, 8, 10],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
      }]
    }, 
    options: {
      title:{
          text:"Horizontal Chart",
          display:true,
          fontColor: '#dfdfdf'
      },
      legend: {
        labels: {            
            fontColor: '#dfdfdf'
        },
      },
      scales: {
          yAxes: [{
              ticks: {
                  maxTicksLimit: 10,
                  beginAtZero:true,
                  fontColor : "#dfdfdf",
                  fontSize : 14
              },
              gridLines:{
                color: "#3a3a3a",
                lineWidth:2,
                zeroLineColor :"#3a3a3a",
                zeroLineWidth : 2
            },
            
          }],
          xAxes: [{
            ticks:{
                fontColor : "#dfdfdf",
                fontSize : 14
            },
            gridLines:{
                color: "#3a3a3a",
                lineWidth:2
            },
            stacked: true
          }]
        }
      }
    });

    //mixed chart
    this.MixedChart = new Chart('mixedChart', {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
              { label: ' Awiros mixed chart',
                  data: [9,7 , 3, 5, 8, 10],
                  type :"bar",
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1
              }, 
              {    
                  label: ' Awiros mixed chart',
                  data: [9,7 , 3, 5, 8, 10],
                  type :"line",
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1
              }
          ]
      },
      options: {
        title:{
            text:"Mixed Chart",
            display:true,
            fontColor: '#dfdfdf'
        },
        legend: {
          labels: {            
              fontColor: '#dfdfdf'
          },
        },
        scales: {
            yAxes: [{
                ticks: {
                    maxTicksLimit: 10,
                    beginAtZero:true,
                    fontColor : "#dfdfdf",
                    fontSize : 14
                },
                gridLines:{
                  color: "#3a3a3a",
                  lineWidth:2,
                  zeroLineColor :"#3a3a3a",
                  zeroLineWidth : 2
              },
              stacked: true
            }],
            xAxes: [{
              ticks:{
                  fontColor : "#dfdfdf",
                  fontSize : 14
              },
              gridLines:{
                  color: "#3a3a3a",
                  lineWidth:2
              }
            }]
        },
        responsive:false
      }
    });
    
  }
}
