
import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlMessages } from './control-messages.component';
import { ValidationService } from './validation.service';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ControlMessages]
})
export class HeroListComponent {
  userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }
}

