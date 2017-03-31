import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from'@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
myform:FormGroup;
  constructor(fb:FormBuilder) { 
     this.myform=fb.group(
      {
        'name' :'',
        'email':'',
        'pwd':'',
        'confirm_pwd':''


      }
    );
  }

  ngOnInit() {
  }
    submit(value){
  console.log(value);
  } 

}
