import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  constructor(private router: Router , ) {

  }

  //  showNotification(from, align){

  //     const color = Math.floor((Math.random() * 5) + 1);

  //     switch(color){
  //       case 1:
  //       this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //          disableTimeOut: true,
  //          closeButton: true,
  //          enableHtml: true,
  //          toastClass: "alert alert-info alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //       break;
  //       case 2:
  //       this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //          disableTimeOut: true,
  //          closeButton: true,
  //          enableHtml: true,
  //          toastClass: "alert alert-success alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //       break;
  //       case 3:
  //       this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //          disableTimeOut: true,
  //          closeButton: true,
  //          enableHtml: true,
  //          toastClass: "alert alert-warning alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //       break;
  //       case 4:
  //       this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //          disableTimeOut: true,
  //          enableHtml: true,
  //          closeButton: true,
  //          toastClass: "alert alert-danger alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //        break;
  //        case 5:
  //        this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //           disableTimeOut: true,
  //           closeButton: true,
  //           enableHtml: true,
  //           toastClass: "alert alert-primary alert-with-icon",
  //           positionClass: 'toast-' + from + '-' +  align
  //         });
  //       break;
  //       default:
  //       break;
  //     }
  // }

  ngOnInit() {
  }

  moveToMapPage() {
    this.router.navigateByUrl('/google-map');
  }



}
