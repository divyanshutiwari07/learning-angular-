import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getRandomColor(){
    let randomColorPlugin = {
      beforeUpdate: function(chart) {
          var backgroundColor = [];
          var borderColor = [];
          for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
            var color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",";
              backgroundColor.push(color + "0.3)");
              borderColor.push(color + "1)");
          }
          chart.config.data.datasets[0].backgroundColor = backgroundColor;
          chart.config.data.datasets[0].borderColor = borderColor;
      }
    };
    return randomColorPlugin;
  }
}
