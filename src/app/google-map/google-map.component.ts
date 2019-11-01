import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  ngOnInit() {
  }
  lat = 51.678418;
  lng = 7.809007;

  constructor(private router: Router) { }

  onChoosenLocation(event){
    this.lat =  event.coords.lat;
    this.lng = event.coords.lng;
  }
  moveToChartPage(){
    this.router.navigateByUrl('/chart');
  }
  
  
}
