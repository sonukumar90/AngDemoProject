import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private userServiceService: UserServiceService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {
    console.log('HEADER');

  }
  get isLoggedIn() { return this.userServiceService.isLoggedIn(); }

  logout() {
    alert('meth');
    this.userServiceService.logout();
  }
}
