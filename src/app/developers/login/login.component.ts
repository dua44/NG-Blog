import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMessage="";
  constructor() { }

  ngOnInit(): void {
  }
  validate(_username:any,_password:any)
  {
    debugger;
    var flag = true;
    if(_username=="" )
    {      
      console.log('here');
      this.errorMessage = "please enter login Id";
      flag = false;
      return flag;
    }
    if(_password=="" )
    {
      
      this.errorMessage = "please enter login Password";
      flag = false;
      return flag;
    }
    return flag;
  }
  getlogincredentials(loginId:any,loginPassword:any,button:HTMLButtonElement){
    if(this.validate(loginId,loginPassword))
    {                
      this.disableloginButtion(button);
      this.errorMessage = "";
      this.username =loginId;    
      this.password = loginPassword;
    }
  }
  disableloginButtion(button:HTMLButtonElement)
  {
    button.disabled = true;
  }
}
   
