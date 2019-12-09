import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };

}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validators: comparePassword}),
      userName: ['', [Validators.required, Validators.minLength(4)]],
      address: [null],
      dob: [null],
      phoneNumber: ['', Validators.required, Validators.pattern(/0([0-9]{9,10})/)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.signinForm);
  }

}
