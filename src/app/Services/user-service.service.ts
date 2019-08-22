import { IPosts } from './../Interface/IPosts';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {


  // Http Headers Options
  public httpOptions: any;
  constructor(private http: Http, private router: Router) {
  }

  mydata: object;

  getUsers(): Observable<any> {

    return this.http.get('http://localhost:5000/api/values')
      .pipe(map((res: Response) => res.json()));
  }


  isLoggedIn() {
    if (localStorage.getItem('isLogin')) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLogin');
    this.router.navigate(['Login']);
  }
  insertUsers(customer: any) {
    console.log(JSON.stringify(customer));
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this.http.post('http://localhost:5000/api/values',
      JSON.stringify(customer),
      options);
  }

  validateUsers(customer: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    return this.http.post('http://localhost:5000/api/values/Login',
      JSON.stringify(customer),
      options).pipe(map((res: Response) => res));
  }

  getUsersForPromise(): Observable<IPosts> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .pipe(debounceTime(20000), map((res: Response) => res.json()));
  }
  checkUsers(email: string): Observable<boolean> {
    return this.http
      .get('http://localhost:5000/api/values/CheckUser?EmailId=' + email)
      .pipe(debounceTime(20000), map((res: Response) => res.json()));
  }

  getUserById(userid: number): Observable<any> {
    return this.http
    .get('http://localhost:5000/api/values/' + userid)
    .pipe(debounceTime(20000), map((res: Response) => res.json()));
  }
}
