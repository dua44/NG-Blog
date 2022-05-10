import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fullname="";
  emailaddress="";
  password = "";
  confirmpassword="";
  constructor() { }

  ngOnInit(): void {
  }
  
  signup(value:any)
  {
    console.log(value);
    this.fullname = value.fullname;
    this.emailaddress = value.emailaddress;
    this.password = value.password;
    this.confirmpassword = value.confirmpassword;
  }
  

}
