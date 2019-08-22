import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../Services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: UserServiceService, private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
    | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string) {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['Login']);
    return false;
  }
}
