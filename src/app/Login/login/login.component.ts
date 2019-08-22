import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitted: boolean;
  data: any;
  isValidLogin: boolean;
  constructor(
    private fb: FormBuilder,
    private userServiceService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        emailId: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );
    this.isValidLogin = false;
    this.userServiceService.logout();
  }

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }


    this.userServiceService.validateUsers(this.loginForm.value).subscribe((re) => {
      this.data = re.json().message;
      if (re.json().message === 'Success') {
        localStorage.setItem('isLogin', re.json().data.emailId);
        this.router.navigate(['/']);
      } else {
        this.isValidLogin = true;
        localStorage.removeItem('isLogin');
      }
    });



  }
}
