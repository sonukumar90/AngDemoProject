import { map } from 'rxjs/operators';
import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { UserServiceService } from './Services/user-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit  {
  title = 'new-web-app';
   data: any;
  constructor(private userServiceService: UserServiceService, private router: Router) {

  }
  ngAfterViewInit() {
    console.log('dsdsds');
  }
  ngOnInit() {
 this.userServiceService.getUsers().subscribe((rsp) => {
   this.data = rsp;
 });
}
get isLoggedIn() { return this.userServiceService.isLoggedIn(); }

logout() {
  alert('meth');
  this.userServiceService.logout();
}

}
