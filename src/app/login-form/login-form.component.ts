
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


function phoneValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^131/)) {
    return { invalidPhonenumber: true }
  }
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  pin: AbstractControl;
  phonenumber: AbstractControl;
  loginFailed: boolean;

  constructor(fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.myForm = fb.group({
      'username': ['chenxu', Validators.required],
      'password': ['', Validators.required],
      'pin': ['', Validators.compose([Validators.min(1000), Validators.max(9999)])],
      'phonenumber': ['13111111111', Validators.compose([Validators.minLength(11), Validators.maxLength(11), phoneValidator])]
    });

    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];
    this.pin = this.myForm.controls['pin'];
    this.phonenumber = this.myForm.controls['phonenumber'];
    this.loginFailed = false;
  }

  ngOnInit() {
  }



  onSubmit(value: string): void {
    if (!this.myForm.valid) {
      alert('表单无效，请检查！');
      return;
    }
    //判断有效无效
    console.log('you submitted value:', value);
    //闭包，var/let
    //var myRouter = this.router;
    this.auth.login(value, function () {
      this.router.navigate(['/home'])
      //  myRouter.navigate(['/home']);
    }.bind(this));


    /*this.httpclient.get('http://127.0.0.1:8082/login').subscribe(
      (resp: any) => {
        console.log(resp);
        let u = resp[0];
        let o = value;
        if(u.username == o['username'] && u.password == o['password']){
          alert('登录成功！');
        }
        else {
       alert('登录失败！');
        }
      }
    )；*/

    /* this.httpclient.post('http://127.0.0.1:8082/login',JSON.stringify(value)).subscribe(
       (resp:any) =>{
         console.log(resp);
         if (resp.success){
           
           alert('登录成功！');
         }
         else{
           alert('登录失败');
         }
       }
     );*/
  }
}
