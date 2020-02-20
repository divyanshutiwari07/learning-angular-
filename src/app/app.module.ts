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

import { FormsModule } from '@angular/forms';

import { MultipleChartsComponent } from './chart/multiple-charts/multiple-charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // BarChartComponent,
    MultipleChartsComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyAvHOVyKdKTRI3y_Sxky2x0x2nD5r90-Bs'
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ToastrModule.forRoot({
      timeOut: 2000
    }),
  ],
  providers: [
    TestService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
