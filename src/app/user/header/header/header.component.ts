import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //registration model form

  registerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    password: [''],
    user_type: ['user'],
   
  });
//Login model form 
  loginForm = this.fb.group({
    email: [''],
    password: [''],
   
  });

  constructor(private fb: FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {
  }


  onSubmitRegister(){
    console.log(this.registerForm.value);
  }

  onSubmitLogin(){
    console.warn(this.loginForm.value);

    this.auth.login(this.loginForm.value).subscribe(data=>console.log(data));
  }
}
