import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey: string = 'token';
  constructor(private htpp: HttpClient) {}
  login(user) {
    return this.htpp.post('https://reqres.in/api/login', user);
  }
  isLogin() {
    let token = localStorage.getItem(this.tokenKey);
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
  }
  getToken() {
    let token = localStorage.getItem(this.tokenKey);
    if (token) {
      return token;
    }
  }
}
