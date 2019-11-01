import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToMapPage(){
    this.router.navigateByUrl('/google-map')
  }

}
