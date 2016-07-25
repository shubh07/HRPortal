import {Component, ViewEncapsulation} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlMessages } from '../control-messages.component';
import { ValidationService } from '../validation.service';
import { ROUTER_DIRECTIVES, RouterConfig } from '@angular/router';
@Component({
  selector: 'login',
  directives: [REACTIVE_FORM_DIRECTIVES, ControlMessages,ROUTER_DIRECTIVES],
  styleUrls: ['./app/sass/css/auth.css'],
  templateUrl: './app/login/login.html'
})
export class LoginComponent {
userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`email: ${this.userForm.value.name} password: ${this.userForm.value.email}`);
    }
  }
}