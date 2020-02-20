import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.css']
})
export class PreviewImageComponent implements OnInit {

 

  constructor() { }

  ngOnInit() {
  }

  name = 'Angular 4';
  url :any ;
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      // var reader = new FileReader();
      
      const fileReader: FileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]); 
      fileReader.onload = (event: Event) => {
        // event.target.result; // This is invalid
        this.url = fileReader.result; // This is valid
      }

      // reader.readAsDataURL(event.target.files[0]); 

      // reader.onload = (event) => { 
        // this.url = event.target.result;
      //   this.url = .result;
      // }
    }
  }

}
