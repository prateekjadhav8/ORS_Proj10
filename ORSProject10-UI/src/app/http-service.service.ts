import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'


@Injectable()

export class HttpServiceService {


  token = '';
 
  userparams = {
    url: '',
    sessionExpiredMsg: '',
    methodType: '',
  };


  setToken(token) {
    this.token = localStorage.getItem('token');
  //  console.log(this.token + '----> inside setToken');
  }

  getToken() {
    console.log(localStorage.getItem('token') + '====>> getToken');
    return localStorage.getItem('token');
  }

  constructor(private router: Router, private httpClient: HttpClient) {
    console.log('http service');

  }
  isLogout() {

    const isLoginUrl = new RegExp("((\/login)[a-zA-Z0-9@:%._\\+~#?&//=]*)").test(this.router.url);  
    let JSESSIONID = localStorage.getItem('fname');
    console.log(JSESSIONID + '----JSESSIONID')
    if ((JSESSIONID == "null" || JSESSIONID === null) && (!isLoginUrl
      && this.router.url != "/Auth"
      && this.router.url != "/logout"
      && this.router.url != "/forgotpassword"
      && this.router.url != "/signup"
    )) {     
       //this.router.navigate(['/login'], {queryParams: {sessionExpiredMsg: 'session expired devashish'}});
      this.userparams.sessionExpiredMsg = 'Session Expired, Please Login Again';
      this.userparams.url = this.router.url;
      this.userparams.methodType = 'get';
      let userparamsStringify = JSON.stringify(this.userparams);        
      this.router.navigate(['/login'], { queryParams: { userparams: userparamsStringify } });
      return true;
    } else {     
      return false;
    }
  }

  get(endpoint, callback) {
    if (this.isLogout()) {
      console.log('inside isLogout() return true');
      return true;
    }
    return this.httpClient.get(endpoint).subscribe((data) => {
      console.log('Data :: ' + data);
      callback(data);

    });
  }

  post(endpoint, bean, callback) {
    if (this.isLogout()) {
      console.log('inside isLogout return true')
      return true;
    }
    return this.httpClient.post(endpoint, bean).subscribe((data) => {
      console.log(data);
      callback(data);

    }, error => {
      console.log('ORS Error--', error);
    });
  }


}