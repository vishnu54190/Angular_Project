import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TodoserviceService } from '../services/todoservice.service';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl }  from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private regservice:RegisterComponent,private router:Router,private fbb:FormBuilder,private servelist:TodoserviceService ) {}
  signinform=this.fbb.group({
    
    Email: ['',[Validators.required]],
    
    pass: ['', [Validators.required]],
    
    
  });
  emailinput:string='';
  passwordinput:string='';
  logged_in: boolean = false;
  
  credentials:any;
  errorMessage:string='';
  response:string='';
  
  

  onSubmit(){
    console.log(this.regservice.a);
    
    console.log(this.servelist.cred_list);
    
    for(let i=0;i<this.servelist.cred_list.length;i++){
      if(this.servelist.cred_list[i][0] == this.emailinput && this.servelist.cred_list[i][1]==this.passwordinput)
      {
        this.logged_in=true;
        this.servelist.logged_email=this.servelist.cred_list[i][0];
        console.log("Inside if block");
        
      }

    }
    if(this.logged_in==true){
      this.errorMessage='Successfully logged in';
      this.router.navigate(['/todo']);
      
    }
    else{
      this.errorMessage='Invalid username or password';
    }
    
  }
    
  }



