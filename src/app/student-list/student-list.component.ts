import { Component, OnInit } from '@angular/core';
import{Student,STUDENTS} from'src/student'
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { validateConfig } from '@angular/router/src/config'

function usernameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match('')) {
    return { invalidusername: false };
  }
  if (!control.value.match('')) {
    return { invalidgender: false };
  }
  if (!control.value.match('')) {
    return { invalidweb: false };
  }
  if (!control.value.match('')) {
    return { invalideembeded: false };
  }
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
students:Student[];
myForm: FormGroup;
username: AbstractControl;
gender: AbstractControl;
web: AbstractControl;
embeded: AbstractControl;

  constructor(fb: FormBuilder,private httpclient:HttpClient) {
    this.students =STUDENTS;
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required, usernameValidator])],
      'gender': ['', Validators.compose([Validators.required])],
      'web': ['', Validators.compose([Validators.minLength(0), Validators.maxLength(3)])],
      'embeded': ['', Validators.compose([Validators.minLength(0), Validators.maxLength(3)])]
    });
    this.username = this.myForm.controls['username'];
    this.gender = this.myForm.controls['gender'];
    this.web = this.myForm.controls['web'];
    this.embeded = this.myForm.controls['embeded'];

   }

  ngOnInit() {
  }

}
