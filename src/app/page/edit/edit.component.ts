import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { MustMatch } from 'src/app/Register/register/newFile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  isMailExit = false;
  constructor(
    private fb: FormBuilder,
    private userServiceService: UserServiceService, private router: Router
  ) { }

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.fb.group(
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
    this.userServiceService.getUserById(+userId)
      .subscribe(data => {
        console.log('data' + data),
          this.editForm.setValue({
            FirstName: data.firstName,
            lastName: data.lastName,
            mobileNo: data.mobileNo,
            address1: data.address1,
            userName: data.userName,
            emailId: data.emailId,
            password: data.password,
            confirmPassword: null
          });
      });
  }
  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)' + JSON.stringify(this.editForm.value));

    this.userServiceService.insertUsers(this.editForm.value).subscribe((re) => {
    });
  }


}
