import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { IPosts } from 'src/app/Interface/IPosts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  datas: any;
  constructor(private userServiceService: UserServiceService, private router: Router, ) { }

  ngOnInit() {

    this.GetUserData();
  }
  GetUserData() {
    this.userServiceService.getUsers().subscribe((res) => this.datas = res);
  }
  editUser(user: IPosts): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-user']);
  }
}
