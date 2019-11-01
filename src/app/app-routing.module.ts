import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component'
import { MultipleChartsComponent } from './chart/multiple-charts/multiple-charts.component';
import { ShowChartsComponent } from './chart/show-charts/show-charts.component';





const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/google-map' },
  { path: 'google-map', component :  GoogleMapComponent },
  { path: 'chart' ,component: ChartComponent},
  { path: 'bar-chart' ,component:BarChartComponent },
  { path: 'multiple-charts' ,component:MultipleChartsComponent },
  { path: 'show-charts' ,component:ShowChartsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ChartComponent, GoogleMapComponent,BarChartComponent,
  MultipleChartsComponent, ShowChartsComponent ]

  