import {Component, ViewEncapsulation} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlMessages } from '../control-messages.component';
import { ValidationService } from '../services/validation.service';
import { ROUTER_DIRECTIVES, RouterConfig, Router } from '@angular/router';

//import schemas
import {LoginUser} from '../schemas/users.schema';

//import service
import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'login',
  providers: [AuthenticationService],
  directives: [REACTIVE_FORM_DIRECTIVES, ControlMessages,ROUTER_DIRECTIVES],
  styleUrls: ['./node_modules/font-awesome/css/font-awesome.css'],
  templateUrl: './app/login/login.html'
})
export class LoginComponent {
    userForm: any;
    public user = new LoginUser('','');
    public errorMsg = '';
  
  constructor(private formBuilder: FormBuilder,public router: Router, private _service: AuthenticationService) {
      
    this.userForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  login() {
      if (this.userForm.dirty && this.userForm.valid) {
          if(!this._service.login(this.user)){
              this.errorMsg = 'Failed to login';
          }
          else
            this.router.navigate(['/dashboard']);
      }
    }
  
}