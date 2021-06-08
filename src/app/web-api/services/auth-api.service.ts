import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(user: string, password: string) {
    return this.http.post<AuthModel.AuthToken>(environment.apiUrl + '/auth/login', { user, password }, this.httpOptions)
      .pipe(map(this.setSession))
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }

  isLoggedIn() {
    return !this.isTokenExpired();
  }

  isLoggedOut() {
    return this.isTokenExpired();
  }

  private setSession(authResult: AuthModel.AuthToken) {
    localStorage.setItem("token", authResult.accessToken);
    localStorage.setItem("expires_at", JSON.stringify(authResult.expiresIn.valueOf()));
    return authResult;
  }

  private isTokenExpired() {
    const expiration = localStorage.getItem("expires_at");
    const expiryTime = expiration && JSON.parse(expiration);
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date().getTime())) < 500
    }
    return true;
  }
}
