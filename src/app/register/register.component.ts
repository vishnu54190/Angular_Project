import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoserviceService } from '../services/todoservice.service';
function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('createpassword');
  const reEnterPassword = control.get('reenter');

  if ( password != null && reEnterPassword != null && password.value !== reEnterPassword.value ) {
    return { passwordMismatch: true };
  }

  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private fb: FormBuilder,private router: Router,private serve:TodoserviceService) { }

    registrationform=this.fb.group({
      firstName: ['',Validators.required],
      email: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
      phonenumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      createpassword: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$')]],
      reenter: ['',Validators.required],
      
    },{ validator: passwordMatchValidator });
    
    a:string='outside reg';
    regemail:string='';
    regpass:string='';
    message:string='';
    onreg(){
      this.a='inside reg';
      this.serve.cred_list.push([this.regemail,this.regpass]);
      this.message='Registered successfully';
      console.log(this.serve.cred_list);
      this.router.navigate(['/signin']);
      
    }
    };



