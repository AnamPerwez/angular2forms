import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  constructor(fb:FormBuilder) {
  this.loginform=fb.group({
    'email':'',
    'pwd':''
  });
   }

  ngOnInit() {
  }
  submit(value){
    console.log('user'+value.email+'loggedin');
  }

}
