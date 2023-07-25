import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router){
  }
  loginForm:any;
  ngOnInit():void{
    this.loginForm = new FormGroup({
      'email':new FormControl("", [Validators.required]),
      'password':new FormControl("", [Validators.required])
    })
  }
  Submit(){
    debugger;
   console.log("logged in")
     localStorage.setItem('email',this.loginForm.value.email);
     localStorage.setItem('password', this.loginForm.value.password);
 
     if((this.loginForm.value.email=="student@gmail.com" &&  this.loginForm.value.password=="student" )
     ){
       this.router.navigate(['/homepage'])
     }
      else if( (this.loginForm.value.email =="author@gmail.com" && this.loginForm.value.password =="author")){
      this.router.navigate(['/authorpage'])
      }
     
     else{
       alert("Please login with student or author Credentials")
     }
 
     console.log(this.loginForm.value.email);
     console.log(this.loginForm.value.password);
     console.log(this.loginForm)
   }
   get email() {
     return this.loginForm.get('email')!;
   }
 
   get password() {
     return this.loginForm.get('password')!;
   }
 
}
