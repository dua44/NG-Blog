import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Rizzu Blogpost';
  developerName = 'Muhammad Rizwan';
  developerDesignation = 'Solution Architect';
  getdeveloperName()
  {

    return this.developerName;
  }
  getdeveloperDesignation ()
  {

    return  this.developerDesignation;
  }

  developer={
    name : this.developerName,
    designation : this.developerDesignation
  }
  developers=['Muhamad Rizwan','Shadman','Daniyal','Rehan','Zaryab Sultant'];
}
