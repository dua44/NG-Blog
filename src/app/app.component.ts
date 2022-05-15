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
  appName = 'Rizzu Angular Project';
  appColor = 'Yellow';
  developerName = 'Muhammad Rizwan';
  developerDesignation = 'Solution Architect';
  error = false;
  
  projectInfo = [{
    appName : 'Whatsapp Data Collector',
    Status : 'Inprogress',  
    developerName : 'Muhammad Rizwan',
    developerDesignation : 'Solution Architect'
  },{
    appName : 'BOL Wtiters Portal',
    appColor : 'Inprogress',  
    developerName : 'Muhammad Zaryab Sultan',
    developerDesignation : 'Software Engineer'
  },{
    appName : 'Production System',
    appColor : 'Completed',  
    developerName : 'Daniyal Bhatti',
    developerDesignation : 'Architect'
  },{
    appName : 'Chat',
    appColor : 'Completed',  
    developerName : 'Shadman',
    developerDesignation : 'Solution Architect'
  }]
  
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

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
