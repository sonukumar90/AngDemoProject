import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MustMatch } from './newFile';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: '/register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  isMailExit = false;
  constructor(
    private fb: FormBuilder,
    private userServiceService: UserServiceService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        FirstName: ['', Validators.required],
        lastName: ['', Validators.required],
        mobileNo: ['', Validators.required],
        address1: ['', Validators.required],
        userName: ['', Validators.required],
        emailId: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)' + JSON.stringify(this.registerForm.value));

    this.userServiceService.insertUsers(this.registerForm.value).subscribe((re) => {
    });
  }
}
