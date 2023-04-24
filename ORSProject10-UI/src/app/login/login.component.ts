import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
import { DataValidator } from '../utility/data-validator';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  endpoint = "http://localhost:8080/Auth";

  form = {
    error: false, 
    message: '',
    loginId: '',
    password: '',
    loginUrl: '',
    logout: '',
  };

  inputerror = {};
  message = '';

  userparams = {
    url: '',
    sessionExpiredMsg: '',
    methodType: '',
  };



  constructor(private httpService: HttpServiceService, private dataValidator: DataValidator, private router: Router,
    private cookieService: CookieService, private route: ActivatedRoute) {


    //       var s ="logout"
    //       var self = this
    //       this.httpService.get(this.router, function(param) {
    //         s = param["logout"];
    //       }
    //       )
    //        if (s == "logout") {
    //          self.form.error = false;
    //          self.form.message = "logout successfully"
    // }
    // else if (this.session== null) { 
    //   self.form.error = true;
    //   self.form.message = "oops your session has been expired";

    // }
  }

  /**
   * Initialize component
   */
  public mesag: string;
  ngOnInit() {

    console.log("this run sign");

    this.mesag = localStorage.getItem("logmess");
    localStorage.removeItem("logmess");
    this.message = this.mesag;
    this.userSessionCheck();
    console.log(this.message);
    window.onpopstate = (e) => { window.history.forward(); }

  }




  userSessionCheck() {

    this.route.paramMap.subscribe(params => {
      //  this.userList = params.get('userparams');    
      //  this.userparams=JSON.parse(this.route.snapshot.paramMap.get('userparams'));

      this.userparams = JSON.parse(this.route.snapshot.queryParamMap.get('userparams'));
      if (this.userparams != null) {
        this.form.message = this.userparams.sessionExpiredMsg;
        this.form.loginUrl = this.userparams.url;
        console.log('URL-----------------------' + this.userparams.url);
        //  console.log('Message-----------------------' + this.userparams.sessionExpiredMsg);
        //  console.log('Method Type-----------------------' + this.userparams.methodType);
      }

    });

    if (this.form.message != null) {
      this.form.error = true;
    }
  }

  validate() {
    let flag = true;
    flag = flag && this.dataValidator.isNotNull(this.form.loginId);
    console.log(this.form.loginId);
    flag = flag && this.dataValidator.isNotNull(this.form.password);
    console.log(this.form.password);
    return flag;
  }


  signIn() {
    var _self = this;
    this.form.error = false;
    const requestedUrl = this.form.loginUrl
    console.log('signIn----', this.form);
    localStorage.removeItem("logmess");

    this.httpService.post(this.endpoint + "/login", this.form, function (res) {

      console.log('MyResponse', res);

      _self.form.message = '';
      _self.inputerror = {};
      _self.form.loginId = res.result.loginId;
      if (_self.dataValidator.isNotNullObject(res.result.message)) {
        _self.form.message = res.result.message;
      }

      _self.form.error = !res.success;

      if (_self.dataValidator.isNotNullObject(res.result.inputerror)) {
        _self.inputerror = res.result.inputerror;
      }

      if (_self.dataValidator.isTrue(res.success)) {

        _self.httpService.setToken(res.result.token);
        localStorage.setItem("loginId", res.result.loginId);
        let tokenStr = "Bearer " + res.result.token;
        localStorage.setItem("token", tokenStr);
        localStorage.setItem("role", res.result.role);
        localStorage.setItem("fname", res.result.fname);
        localStorage.setItem("lname", res.result.lname);
        localStorage.setItem("userid", res.result.data.id);
        //   console.log(res.result.data.id + 'sessionId set ----');
        //   console.log(res.result.token + '  Token set ----');


        if (requestedUrl != null && requestedUrl != '') {
          _self.router.navigateByUrl(requestedUrl);
        } else {
          _self.router.navigateByUrl('dashboard');
        }
      }
    });
  }

}