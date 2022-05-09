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
  disableButton=true;
  constructor() { }

  ngOnInit(): void {
  }
  validate(_username:any,_password:any)
  {    
    if(_username=="" )
    {      
      console.log('here');
      this.errorMessage = "please enter login Id";     
    }
    else{
      this.errorMessage = "";
    }
    if(_password=="" )
    {      
      this.errorMessage = "please enter login Password";     
    }
    else{
      this.errorMessage = "";
    }

    if(_username!="" && _password!="")
    {
       this.disableButton = false;

    }
    
  }
  getlogincredentials(loginId:any,loginPassword:any,button:HTMLButtonElement){
                  
      this.disableloginButtion(button);
      this.errorMessage = "";
      this.username =loginId;    
      this.password = loginPassword;
     
  }
  disableloginButtion(button:HTMLButtonElement)
  {
    button.disabled = true;
  }
}
   
