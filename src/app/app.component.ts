import { Component } from '@angular/core';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  model = {
    left: true,
    middle: false,
    right: false
  };
  appName = 'Rizzu Blogpost';
  appColor = 'Yellow';
  developerName = 'Muhammad Rizwan';
  developerDesignation = 'Solution Architect';
  error = false;
   
  getdeveloperName()
  {

    return this.developerName;
  }
  getdeveloperDesignation ()
  {

    return  this.developerDesignation;
  }
  UpdateColor()
  {
    this.appColor = "blue";
  }
  developer={
    name : this.developerName,
    designation : this.developerDesignation
  }
  developers=['Muhamad Rizwan','Shadman','Daniyal','Rehan','Zaryab Sultant'];

  
}
