import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  constructor(private httpclient: HttpClient) { }
  login(u: any, callback: any): boolean {
    /* let u = {
       username: user,
       password: password
     };*/

    this.httpclient.post('http://127.0.0.1:8082/login', JSON.stringify(u)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          this.loggedIn = true;
          callback();
        } else {
          this.loggedIn = false;
        }
      }
    );
    return true;
  }
  logout() {
    this.loggedIn = false;
  }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}
