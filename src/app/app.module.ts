import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
// import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
// import { MultipleChartsComponent } from './chart/multiple-charts/multiple-charts.component';
// import { ShowChartsComponent } from './chart/show-charts/show-charts.component';

import { TestService } from './service/test.service';

import { HelloComponent } from './hello.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HelloComponent


    
    // BarChartComponent,
    // MultipleChartsComponent,
    // ShowChartsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey : "AIzaSyAvHOVyKdKTRI3y_Sxky2x0x2nD5r90-Bs" 
    }) 
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
