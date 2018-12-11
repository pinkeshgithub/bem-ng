import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  titleNew = "This is my first Angular app";

  clickHandler(){
    alert("I am Clicked");
  }
}
