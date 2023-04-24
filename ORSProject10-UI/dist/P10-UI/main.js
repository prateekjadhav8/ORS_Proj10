(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./jasper-report/jasper-report.component */ "./src/app/jasper-report/jasper-report.component.ts");




































var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    },
    {
        path: 'loader',
        component: _loader_loader_component__WEBPACK_IMPORTED_MODULE_32__["LoaderComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'login/:userparams',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'spinner',
        component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_33__["SpinnerComponent"]
    },
    {
        path: 'forgotpassword',
        component: _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]
    },
    {
        path: 'signup',
        component: _login_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
    },
    {
        path: 'message/:id',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"]
    },
    {
        path: 'messagelist',
        component: _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__["MessageListComponent"]
    },
    {
        path: 'marksheet',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheet/:id',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheetlist',
        component: _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__["MarksheetListComponent"]
    },
    {
        path: 'marksheetmeritlist',
        component: _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_29__["MarksheetmeritListComponent"]
    },
    {
        path: 'getmarksheet',
        component: _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_30__["GetmarksheetComponent"]
    },
    {
        path: 'college',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'college/:id',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'collegelist',
        component: _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__["CollegeListComponent"]
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'student/:id',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'studentlist',
        component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__["StudentListComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"]
    },
    {
        path: 'user/:id',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"]
    },
    {
        path: 'userlist',
        component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_16__["UserListComponent"]
    },
    {
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_18__["RoleComponent"]
    },
    {
        path: 'rolelist',
        component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_21__["RoleListComponent"]
    },
    {
        path: 'role/:id',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_18__["RoleComponent"]
    },
    {
        path: 'course',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_19__["CourseComponent"]
    },
    {
        path: 'courselist',
        component: _course_course_list_component__WEBPACK_IMPORTED_MODULE_22__["CourseListComponent"]
    },
    {
        path: 'course/:id',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_19__["CourseComponent"]
    },
    {
        path: 'faculty',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_23__["FacultyComponent"]
    },
    {
        path: 'facultylist',
        component: _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_24__["FacultyListComponent"]
    },
    {
        path: 'faculty/:id',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_23__["FacultyComponent"]
    },
    {
        path: 'timetable',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_25__["TimetableComponent"]
    },
    {
        path: 'timetablelist',
        component: _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_27__["TimetableListComponent"]
    },
    {
        path: 'timetable/:id',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_25__["TimetableComponent"]
    },
    {
        path: 'subject',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_20__["SubjectComponent"]
    },
    {
        path: 'subjectlist',
        component: _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_28__["SubjectListComponent"]
    },
    {
        path: 'subject/:id',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_20__["SubjectComponent"]
    },
    {
        path: 'myprofile',
        component: _user_myprofile_component__WEBPACK_IMPORTED_MODULE_34__["MyprofileComponent"]
    },
    {
        path: 'file',
        component: _file_file_component__WEBPACK_IMPORTED_MODULE_26__["FileComponent"]
    },
    { path: 'changepassword',
        component: _user_changepassword_component__WEBPACK_IMPORTED_MODULE_31__["ChangepasswordComponent"]
    },
    { path: 'jasperReport',
        component: _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_35__["JasperReportComponent"]
    },
    {
        path: '**',
        component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  \n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  .app {\n    margin: 48px;\n  }\n  \n  .buttons {\n    display: flex;\n    max-width: 500px;\n    justify-content: space-evenly;\n    margin-bottom: 48px;\n\n  }\n\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuYXBwIHtcbiAgICBtYXJnaW46IDQ4cHg7XG4gIH1cbiAgXG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcblxuICB9XG5cbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: myHttpLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myHttpLoader", function() { return myHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./jasper-report/jasper-report.component */ "./src/app/jasper-report/jasper-report.component.ts");
















































// import { AuthService } from './auth.service';
function myHttpLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_7__["MarksheetComponent"],
                _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__["MarksheetListComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"],
                _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__["StudentListComponent"],
                _college_college_component__WEBPACK_IMPORTED_MODULE_9__["CollegeComponent"],
                _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__["CollegeListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _login_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"],
                _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__["MessageListComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
                _user_user_list_component__WEBPACK_IMPORTED_MODULE_26__["UserListComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_25__["PageNotFoundComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_27__["RoleComponent"],
                _role_role_list_component__WEBPACK_IMPORTED_MODULE_30__["RoleListComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_28__["CourseComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_29__["SubjectComponent"],
                _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_37__["SubjectListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_31__["TimetableComponent"],
                _course_course_list_component__WEBPACK_IMPORTED_MODULE_32__["CourseListComponent"],
                _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_33__["FacultyComponent"],
                _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_34__["FacultyListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_31__["TimetableComponent"],
                _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_36__["TimetableListComponent"],
                _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_38__["MarksheetmeritListComponent"],
                _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_39__["GetmarksheetComponent"],
                _user_changepassword_component__WEBPACK_IMPORTED_MODULE_40__["ChangepasswordComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_41__["LoaderComponent"],
                _file_file_component__WEBPACK_IMPORTED_MODULE_35__["FileComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_42__["NavbarComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_43__["SpinnerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_44__["FooterComponent"],
                _user_myprofile_component__WEBPACK_IMPORTED_MODULE_46__["MyprofileComponent"],
                _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_47__["JasperReportComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: myHttpLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _auth_service__WEBPACK_IMPORTED_MODULE_45__["AuthService"], multi: true
                },
                _http_service_service__WEBPACK_IMPORTED_MODULE_12__["HttpServiceService"],
                _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__["DataValidator"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.intercept = function (req, next) {
        if (localStorage.getItem('fname') && localStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    "withCredentials": "true",
                    "name": "Vishu",
                    Authorization: this.http.getToken()
                }
            });
        }
        console.log(req.headers.get("Authorization") + "------------------->>>");
        return next.handle(req);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListCtl", function() { return BaseListCtl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");



var BaseListCtl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseListCtl, _super);
    function BaseListCtl(endpoint, locator, route) {
        var _this = _super.call(this, endpoint, locator, route) || this;
        _this.endpoint = endpoint;
        _this.locator = locator;
        _this.route = route;
        _this.deleteRecordList = [];
        _this.isMasterSel = false;
        return _this;
    }
    /**
     * Initialize component
     */
    BaseListCtl.prototype.ngOnInit = function () {
        this.preload();
        this.search();
        this.isMasterSel = false;
    };
    BaseListCtl.prototype.display = function () {
        this.search();
    };
    BaseListCtl.prototype.submit = function () {
        this.search();
    };
    BaseListCtl.prototype.delete = function (id) {
        _super.prototype.delete.call(this, id, function () {
            this.search();
        });
    };
    BaseListCtl.prototype.next = function () {
        this.form.pageNo++;
        this.display();
        //  this.isMasterSel = false ;  
        //  this.searchOperation('previous');
    };
    BaseListCtl.prototype.previous = function () {
        if (this.form.pageNo > 0) {
            this.form.pageNo--;
            //  this.display(); 
            this.isMasterSel = false;
            this.searchOperation('previous');
        }
    };
    BaseListCtl.prototype.checkUncheckAll = function (event) {
        var checked = event.target.checked;
        this.checkboxes.forEach(function (element) {
            element.nativeElement.checked = checked;
        });
    };
    //   deleteMany(){
    //   console.log('delete Many Records starts ');
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //   var msg : String =''
    //   this.deleteRecordList.length=0;
    //   console.log('record deleting start ')
    //   var isRecordSelected:boolean = false ;
    //     this.checkboxes.forEach((element) => {
    //       if (element.nativeElement.checked) {
    //         // console.log('record deleting ' + element.nativeElement.id)
    //         this.deleteRecordList.push(element.nativeElement.id);
    //         isRecordSelected = true ;
    //       }
    //     });     
    //     if(isRecordSelected){
    //       console.log('record(s) for delete ' + this.deleteRecordList)        
    //       this.serviceLocator.httpService.get(this.api.deleteMany + "/" + this.deleteRecordList + '?pageNo=' +this.form.pageNo, function (res) {
    //         if (res.success) {
    //             console.log('Inside response success ')
    //           //  this.deleteMany();
    //          //  this.form.message = "Data is deleted";
    //        //  msg ="Data is deleted";
    //         //  this.form.message = res.result.message;
    //           console.log('deleteMany Calling Callback'); 
    //           this.search();  
    //     } else {
    //       this.form.error = true;
    //       this.form.message = res.result.message;
    //     }
    //   });
    //   this.form.message = "Data is deleted" ;
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //     }else{
    //       this.form.message = "Select Atleast One Record";
    //         this.form.error = true;
    //     console.log('No record(s) for delete ')
    //   }
    //   console.log('delete Many Records ends ');
    // }
    BaseListCtl.prototype.deleteMany = function () {
        var _this = this;
        console.log('delete Many Records starts ');
        console.log('this.form.pageNo ' + this.form.pageNo);
        this.form.error = false;
        this.deleteRecordList.length = 0;
        console.log('record deleting start ');
        var isRecordSelected = false;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked) {
                // console.log('record deleting ' + element.nativeElement.id)
                _this.deleteRecordList.push(element.nativeElement.id);
                isRecordSelected = true;
            }
        });
        if (isRecordSelected) {
            console.log('record(s) for delete ' + this.deleteRecordList);
            _super.prototype.deleteMany.call(this, this.deleteRecordList + '?pageNo=' + this.form.pageNo, function () {
                //  this.search();  
            });
        }
        else {
            this.form.message = "Select Atleast One Record";
            this.form.error = true;
            console.log('No record(s) for delete ');
        }
        this.isMasterSel = false;
        console.log('delete Many Records ends ');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("checkboxes"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], BaseListCtl.prototype, "checkboxes", void 0);
    return BaseListCtl;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCtl", function() { return BaseCtl; });
var BaseCtl = /** @class */ (function () {
    /**
     * Initialize services
     *
     * @param serviceLocator
     * @param route
     */
    function BaseCtl(endpoint, serviceLocator, route) {
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
            endpoint: null,
            get: null,
            save: null,
            search: null,
            delete: null,
            deleteMany: null,
            preload: null,
            report: null
        };
        /**
         * Form contains preload data, error/sucess message
         */
        this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        var _self = this;
        _self.initApi(endpoint);
        /**
         * Get primary key from path variale
         */
        serviceLocator.getPathVariable(route, function (params) {
            _self.form.data.id = params["id"];
            console.log('I GOT ID', _self.form.data.id);
        });
    }
    BaseCtl.prototype.initApi = function (ep) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.delete = ep + "/delete";
        this.api.deleteMany = ep + "/deleteMany";
        this.api.preload = ep + "/preload";
        this.api.report = ep + "/report";
        console.log("API", this.api);
    };
    /**
     * Initialize component
     */
    BaseCtl.prototype.ngOnInit = function () {
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
    };
    /**
     * Loded preload data
     */
    BaseCtl.prototype.preload = function () {
        console.log("preload start");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res) {
            if (res.success) {
                _self.form.preload = res.result;
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    BaseCtl.prototype.validateForm = function (form) {
    };
    /**
     * Searhs records
     */
    BaseCtl.prototype.search = function () {
        console.log("search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.searchOperation = function (operation) {
        console.log("previous/next search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (operation == 'next' || operation == 'previous') {
                _self.form.message = null;
                _self.form.error = false;
            }
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Contains display logic. It fetches data from database for the primary key
     */
    BaseCtl.prototype.display = function () {
        var _self = this;
        console.log('Inside display method');
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            if (res.success) {
                _self.populateForm(_self.form.data, res.result.data);
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Populate HTML form data
     * Overridden by child classes.
     *
     * @param form
     * @param data
     */
    BaseCtl.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'formid in base ctl');
    };
    /**
     * Contains submit logic. It saves data
     */
    BaseCtl.prototype.submit = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log("form data going to be submit" + this.form.data);
        //  console.log("form data going to be submit" + this.studentId);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                //  console.log("--------------------.");
                return _self.form.data.id;
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.delete = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    //  callback();  
                    this.search();
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.deleteMany = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.post(_self.api.deleteMany + "/" + id, this.form.data, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    _self.form.list = res.result.data;
                    console.log("List ::  ", +res.data);
                    console.log("List Size", _self.form.list.length);
                    //  callback();       
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.generateReport = function () {
        var _self = this;
        console.log('********* Generating Report ********************');
        this.serviceLocator.httpService.get(_self.api.report, function (res) {
            if (res.success) {
                console.log('*********  Report Generated ********************');
                alert('pass');
            }
            else {
                console.log('********* Error in Generating Report  ********************');
                alert('fail');
            }
        });
    };
    /**
     * Forward to page
     * @param page
     */
    BaseCtl.prototype.forward = function (page) {
        console.log(page + '--->>page value');
        this.serviceLocator.forward(page);
    };
    return BaseCtl;
}());



/***/ }),

/***/ "./src/app/college/college-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/college/college-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 1%;padding-bottom: 4%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'College List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"collegeBtn-Group\" style=\"margin-left: 20%; margin-top: 10px;\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\" placeholder=\"{{'Search Name' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.city\" placeholder=\"{{'Search City' | translate }}\" style=\"margin-left:-10%\"> \n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNo\" placeholder=\"{{'Search Phone' | translate }}\" style=\" margin-left: -20%;\">\n        </div>\n\n        <!-- <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2\">\n          <button (click)=\"forward('/college')\" type=\"button\" class=\"btn btn-success\">{{'Add College' | translate }}\n          </button>\n        </div>\n      \n      <div class=\"col-sm-1\">\n        <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n          {{'Delete'| translate}}</button>\n      </div> -->\n      <div>\n        <button (click)=\"submit()\" class=\"btn btn-primary\" style=\"margin-left: -30%;\">\n          {{'Search' | translate }}\n        </button>\n      </div>\n      <div class=\"addCollegeBtn\">\n        <button (click)=\"forward('/college')\" type=\"button\" class=\"btn btn-success\" >{{'Add College' | translate }}\n        </button>\n      </div>\n      <div>\n        <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n          {{'Delete'| translate}}</button>\n      </div>\n    </div>\n     \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate }}</th>\n                <th>{{'Name' | translate }}</th>\n                <th>{{'Address' | translate }}</th>\n                <th>{{'Phone' | translate }}</th>\n                <th>{{'City' | translate }}</th>\n                <th>{{'State' | translate }}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.name }} </td>\n                <td> {{ m.address }} </td>\n                <td> {{ m.phoneNo }} </td>\n                <td> {{ m.city }} </td>\n                <td> {{ m.state }} </td>\n                <td>\n                  <a (click)=\"forward( '/college/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n                \n              </tr>\n            </tbody>\n          </table>\n          <div class=\"collegeBtn-Group justify-content-center\">\n\n            <div class=\"previous\">\n                <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate }} \n\n                </button>\n            </div>\n            <div class=\"next\">\n                <button (click)=\"next()\" [disabled]=\"form.list.length < 5\" class=\"btn btn-info\"> {{'Next' | translate }}\n\n                </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/college/college-list.component.ts ***!
  \***************************************************/
/*! exports provided: CollegeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function() { return CollegeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CollegeListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeListComponent, _super);
    function CollegeListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-list',
            template: __webpack_require__(/*! ./college-list.component.html */ "./src/app/college/college-list.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CollegeListComponent);
    return CollegeListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n\n\n.collegeBtn-Group{\ndisplay: flex;\n}\n\n\n.addCollegeBtn{\n    margin: 0 10px 0 -10px;\n}\n\n\n.previous{\n    margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCOzs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbGxlZ2VCdG4tR3JvdXB7XG5kaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkQ29sbGVnZUJ0bntcbiAgICBtYXJnaW46IDAgMTBweCAwIC0xMHB4O1xufVxuXG4ucHJldmlvdXN7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/college/college.component.html":
/*!************************************************!*\
  !*** ./src/app/college/college.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;background-image: url(../../assets/files/D1.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <div class=\"text-center\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add College' | translate }}</h2>\n        </div>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update College' | translate }}</h2>\n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  placeholder=\"{{'Enter Name' | translate }}\">\n              </div>\n            </div><span class=\"alertRedColor\"> {{form.inputerror.name}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Address' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-map-marker grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"addr\" [(ngModel)]=\"form.data.address\" class=\"form-control\"\n                  placeholder=\"{{'Enter Address' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.address}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'City' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-location-arrow grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"city\" [(ngModel)]=\"form.data.city\" class=\"form-control\"\n                  placeholder=\"{{'Enter City' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.city}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'State' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-address-card grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"state\" [(ngModel)]=\"form.data.state\" class=\"form-control\"\n                  placeholder=\"{{'Enter State' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Phone No.' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phnNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Phone No.' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\n            </div>\n          </div>\n\n          <div class=\"collegeBtn-Group justify-content-center\" style=\"margin-top: 10%;\">\n            <div>\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div>\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n\n            <div>\n              <button (click)=\"forward('/collegelist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CollegeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeComponent, _super);
    function CollegeComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CollegeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        return flag;
    };
    CollegeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.state = data.state;
        form.city = data.city;
        form.phoneNo = data.phoneNo;
        console.log('Populated Form', form);
    };
    CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college',
            template: __webpack_require__(/*! ./college.component.html */ "./src/app/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CollegeComponent);
    return CollegeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/course/course-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/course/course-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 8%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n       <!--  <div class=\"col-sm-6 p-1\"> -->\n          <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Course List' | translate }}</h1>\n          </div>\n\n      <div class=\"courseBtnGroup justify-content-center\" style=\"margin-left:5% \" >\n        <div class=\"searchInput\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\" placeholder=\"{{'Search Course' | translate }}\">\n        </div>\n        <div class=\"searchInput\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.duration\" placeholder=\"{{'Search Duration' | translate }}\">\n        </div>\n        \n\n        <div class=\"searchInput\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"searchInput\">\n          <button (click)=\"forward('/course')\" type=\"button\" class=\"btn btn-success\">{{'Add Course' | translate }}\n          </button>\n        </div>\n     \n      <div>\n        <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n          {{'Delete'| translate}}</button>\n      </div>\n    </div>\n      \n        \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate }}</th>\n                <th>{{'Name' | translate }}</th>\n                <th>{{'Duration' | translate }}</th>\n                <th>{{'Description' | translate }}</th>\n                <th>{{'Edit' | translate }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.courseName}} </td>\n                <td> {{ m.duration }} </td>\n                <td> {{ m.description }} </td>\n                <td>\n                  <a (click)=\"forward( '/course/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n                \n              </tr>\n            </tbody>\n          </table>\n\n      \n\n        </div>\n\n        <div class=\"courseBtn justify-content-center\" style=\"margin-bottom: 15%;\">\n          <div class=\"previous\">\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate }} </button>\n          </div>\n          <div class=\"next\">\n              <button (click)=\"next()\" [disabled]=\"form.list.length < 5\" class=\"btn btn-info\">{{'Next' | translate }} </button>\n          </div>\n          </div>\n      \n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-list.component.ts ***!
  \*************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CourseListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseListComponent, _super);
    function CourseListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CourseListComponent);
    return CourseListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".courseBtn-Group{\r\n    display: flex;\r\n    margin-top: 10%;\r\n}\r\n\r\n.courseBtn{\r\n    display: flex;\r\n}\r\n\r\n.previous{\r\n    margin-right:1%;\r\n}\r\n\r\n.courseBtnGroup{\r\n    display: flex;\r\n}\r\n\r\n.searchInput{\r\n    margin-right:1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZUJ0bi1Hcm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5jb3Vyc2VCdG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHJldmlvdXN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MSU7XHJcbn1cclxuXHJcbi5jb3Vyc2VCdG5Hcm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWFyY2hJbnB1dHtcclxuICAgIG1hcmdpbi1yaWdodDoxJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;background-image: url(../../assets/files/D2.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <div class=\"text-center\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Course' | translate }}</h2>\n          </div>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Course' | translate }}</h2>\n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"courseName\" [(ngModel)]=\"form.data.courseName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Course Name' | translate }}\">\n              </div>\n            </div><span class=\"alertRedColor\"> {{form.inputerror.courseName}} </span>\n          </div>\n\n\n\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Duration' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\" >\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                </div>\n            \n                <select class=\"form-control\" name=\"duration\"\n                  [(ngModel)]=\"form.data.duration\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\n                  <option [value]=\"1\">1 Year</option>\n                  <option [value]=\"2\">2 Year</option>\n                  <option [value]=\"3\">3 Year</option>\n                  <option [value]=\"4\">4 Year</option>\n                  <option [value]=\"5\">5 Year</option>\n\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.duration}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Description' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                </div>\n                <textarea class=\"form-control\" placeholder=\"{{'Enter Description' | translate }}\" name=\"description\"\n                  [(ngModel)]=\"form.data.description\"></textarea>\n              </div>\n            </div><span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\n          </div>\n\n\n          <div class=\"courseBtn-Group justify-content-center\">\n            <div>\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}\n              </button>\n            </div>\n            <div>\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}\n              </button>\n            </div>\n            <div>\n              <button (click)=\"forward('/courselist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List\n                ' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var CourseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseComponent, _super);
    function CourseComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    CourseComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CourseComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.courseName);
        flag = flag && validator.isNotNullObject(form.duration);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    CourseComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseName = data.courseName;
        form.duration = data.duration;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CourseComponent);
    return CourseComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar>\n\n\n\n<div>\n    <p class=\"text-info font-weight-bold\" style=\"padding-left: 30%; font-size: 70px;\">WELCOME TO ORS</p>\n    <div style=\"background-image: url(../../assets/files/IndexView.png); \n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-size: 100%;\n        padding-bottom:18%;\n        padding-top: 5%;\n        \">\n\n        <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\n    </div>\n</div>\n<app-footer></app-footer> -->\n<app-navbar></app-navbar>\n<div class=\"\">\n    <div class=\"img-fluid\" style=\"background-image: url(../../assets/files/D33.jpg); \n        -webkit-background-size: 100%;\n       /*  -moz-background-size: 100%;\n        -o-background-size: 100%; */\n        background-size: 100%;\n        padding-bottom:31%;\">\n        <p class=\"text-warning font-weight-bold\" style=\"text-align: center; font-size: 70px;\">Online Result System</p>   \n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        /*  console.log("CONSOLE TO CHECKTOKEN", localStorage.getItem('token'));
         window.onpopstate = (e) => { window.history.forward(); } */
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/endpoint-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint-service.service.ts ***!
  \*********************************************/
/*! exports provided: EndpointServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointServiceService", function() { return EndpointServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndpointServiceService = /** @class */ (function () {
    function EndpointServiceService() {
        this.SERVER_URL = "http://localhost:8080";
        this.MESSAGE = this.SERVER_URL + "/Message";
        this.USER = this.SERVER_URL + "/User";
        this.ROLE = this.SERVER_URL + "/Role";
        this.COLLEGE = this.SERVER_URL + "/College";
        this.MARKSHEET = this.SERVER_URL + "/Marksheet";
        this.STUDENT = this.SERVER_URL + "/Student";
        this.SUBJECT = this.SERVER_URL + "/Subject";
        this.FACULTY = this.SERVER_URL + "/Faculty";
        this.COURSE = this.SERVER_URL + "/Course";
        this.TIMETABLE = this.SERVER_URL + "/TimeTable";
        this.JASPERREPORT = this.SERVER_URL + "/Jasper";
    }
    EndpointServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EndpointServiceService);
    return EndpointServiceService;
}());



/***/ }),

/***/ "./src/app/faculty/faculty-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"content-wrapper\" style=\"padding-top: 1%; padding-bottom: 4%; background-image: url(../../assets/files/avatar-2191918__480.webp); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <!-- <div class=\"col-sm-6 p-1\"> -->\n          <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Faculty List' | translate}}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\" placeholder=\"{{'Search College' | translate}}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\" placeholder=\"{{'Search Course' | translate}}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\" placeholder=\"{{'Search Subject' | translate}}\">\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate}}</button>\n        </div>\n        <div class=\"col-lg-2\">\n          <button (click)=\"forward('/faculty')\" type=\"button\" class=\"btn btn-success\">{{'Add Faculty' | translate}}\n          </button>\n        </div>\n      \n      <div class=\"col-sm-1\">\n        <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n          {{'Delete'| translate}}</button>\n      </div>\n    </div>\n\n      \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate}}</th>\n                <th>{{'Name' | translate}}</th>\n                <th>{{'DOB' | translate}}</th>\n                <th>{{'Gender' | translate}}</th>\n                <th>{{'College' | translate}}</th>\n                <th>{{'Course' | translate}}</th>\n                <th>{{'Subject' | translate}}</th>\n                <th>{{'Mobile' | translate}}</th>\n                <th>{{'Email' | translate}}</th>\n                <th>{{'Qualification' | translate}}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td>{{(form.pageNo*5)+i+ 1}} </td>\n                <td>{{ m.firstName }} {{m.lastName}} </td>\n                <td>{{m.dob | date : 'dd-MM-yyyy'}} </td>\n                <td>{{ m.gender }} </td>\n                <td>{{m.collegeName}}</td>\n                <td>{{m.courseName}}</td>\n                <td>{{m.subjectName}}</td>\n                <td>{{ m.phoneNo}}</td>\n                <td>{{m.email}}</td>\n                <td>{{m.qualification}}</td>\n                <td>\n                  <a (click)=\"forward( '/faculty/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash  text-danger\"></i>\n                  </a> -->\n                </td>\n\n              </tr>\n              <div class=\"row p-1\">\n                <div class=\"col-lg-7\">\n                  <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate}} </button>\n                </div>\n                <div class=\"col-lg-1\">\n                  <button (click)=\"next()\" [disabled]=\"form.list.length < 5 \"class=\"btn btn-info\">{{'Next' | translate}} </button>\n                </div>\n              </div>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.ts ***!
  \***************************************************/
/*! exports provided: FacultyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyListComponent", function() { return FacultyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var FacultyListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyListComponent, _super);
    function FacultyListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    FacultyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty-list',
            template: __webpack_require__(/*! ./faculty-list.component.html */ "./src/app/faculty/faculty-list.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyListComponent);
    return FacultyListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/*!************************************************!*\
  !*** ./src/app/faculty/faculty.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;background-image: url(../../assets/files/D1.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <div class=\"text-center\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Faculty' | translate}}</h2>\n          </div>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Faculty' | translate}}</h2>\n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email' | translate}} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Qualification' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"qualification\" [(ngModel)]=\"form.data.qualification\" class=\"form-control\"\n                  placeholder=\"{{'Enter Your Qualification' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\n          </div>\n\n\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\"\n                  style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\n            </div>\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'College' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                </div>\n\n\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\n                  style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-list grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" [(ngModel)]=\"form.data.gender\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\n                  <option value=\"Male\">{{'Male' | translate}} </option>\n                  <option value=\"Female\">{{'Female' | translate}} </option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Mobile No' | translate}} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/facultylist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var FacultyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyComponent, _super);
    function FacultyComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    FacultyComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    FacultyComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.email);
        console.log(form.email);
        flag = flag && validator.isNotNullObject(form.qualification);
        console.log(form.qualification);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        console.log(form.phoneNo + "in validateForm----------------------------");
        flag = flag && validator.isNotNullObject(form.courseId);
        console.log(form.courseId);
        flag = flag && validator.isNotNullObject(form.collegeId);
        console.log(form.collegeId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        console.log(form.subjectId);
        return flag;
    };
    FacultyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectId = data.subjectId;
        console.log(form.subjectId + 'subject--');
        form.collegeId = data.collegeId;
        form.courseId = data.courseId;
        console.log(form.courseId + 'course ----');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.email = data.email;
        form.qualification = data.qualification;
        form.gender = data.gender;
        form.dob = data.dob;
        form.phoneNo = data.phoneNo;
        console.log("phoneno----------------" + form.phoneNo);
    };
    FacultyComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyComponent);
    return FacultyComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/file/file.component.css":
/*!*****************************************!*\
  !*** ./src/app/file/file.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/file/file.component.html":
/*!******************************************!*\
  !*** ./src/app/file/file.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n\n    <div class=\"col-md-12\">\n\n        <h1 class=\"text-primary pt-4\">Upload Image Test Page</h1>\n\n    </div>\n\n</div>\n\n<div class=\"container row pl-4\">\n <div class=\"form-group\">\n        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n    </div>\n\n    <div class=\"col-md-6\">\n\n        <input type=\"button\" class=\"btn btn-success\" (click)=\"onUpload()\" value=\"upload\">\n\n    </div>\n\n</div>\n\n<hr />\n<!--   \n  <div class=\"container row\">\n  \n      <div class=\"col-md-12\">\n  \n          <div *ngIf=message>{{message}}</div>\n  \n      </div>\n  \n  </div>\n  \n  \n  <div class=\"container row\">\n  \n      <div class=\"col-md-6\">\n\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"image name\" [(ngModel)]=\"imageName\"\n  \n              name=\"name\" />\n  \n      </div>\n  \n      <div class=\"col-md-6\">\n  \n          <input type=\"button\" (click)=\"getImage()\" value=\"Get Image\">\n  \n      </div>\n  \n  </div>\n  \n  \n  <div class=\"container row\">\n  \n      <div class=\"col-md-12\">\n            <div *ngIf=retrievedImage>\n  \n              <img [src]=\"retrievedImage\">\n  \n          </div>\n  \n      </div>\n  \n  </div> -->"

/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FileComponent = /** @class */ (function () {
    function FileComponent(formBuilder, httpClient) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.fileToUpload = null;
    }
    FileComponent.prototype.ngOnInit = function () { };
    FileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    FileComponent.prototype.onUpload = function () {
        var _this = this;
        this.onSubmit(this.fileToUpload).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    FileComponent.prototype.onSubmit = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload);
        return this.httpClient.post("http://localhost:8080/User/profilePic/1", formData);
    };
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/file/file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\n    position: fixed;\n    \n    bottom: 0px;\n    height: 40px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgXG4gICAgYm90dG9tOiAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center \" style=\"background: linear-gradient(to bottom right, #C33764, #1D2671);\">\n  <!-- Copyright -->\n  <div class=\"text-center pt-2 pb-2 text-light\" >\n    &copy; {{'COPYRIGHT' | translate}}\n    <a class=\"text-light\" href=\"\">{{'NCS PVT. LTD' | translate}}</a>\n  </div>\n  <!-- Copyright -->\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.token = '';
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
        console.log('http service');
    }
    HttpServiceService.prototype.setToken = function (token) {
        this.token = localStorage.getItem('token');
        //  console.log(this.token + '----> inside setToken');
    };
    HttpServiceService.prototype.getToken = function () {
        console.log(localStorage.getItem('token') + '====>> getToken');
        return localStorage.getItem('token');
    };
    HttpServiceService.prototype.isLogout = function () {
        var isLoginUrl = new RegExp("((\/login)[a-zA-Z0-9@:%._\\+~#?&//=]*)").test(this.router.url);
        var JSESSIONID = localStorage.getItem('fname');
        console.log(JSESSIONID + '----JSESSIONID');
        if ((JSESSIONID == "null" || JSESSIONID === null) && (!isLoginUrl
            && this.router.url != "/Auth"
            && this.router.url != "/logout"
            && this.router.url != "/forgotpassword"
            && this.router.url != "/signup")) {
            //this.router.navigate(['/login'], {queryParams: {sessionExpiredMsg: 'session expired devashish'}});
            this.userparams.sessionExpiredMsg = 'Session Expired, Please Login Again';
            this.userparams.url = this.router.url;
            this.userparams.methodType = 'get';
            var userparamsStringify = JSON.stringify(this.userparams);
            this.router.navigate(['/login'], { queryParams: { userparams: userparamsStringify } });
            return true;
        }
        else {
            return false;
        }
    };
    HttpServiceService.prototype.get = function (endpoint, callback) {
        if (this.isLogout()) {
            console.log('inside isLogout() return true');
            return true;
        }
        return this.httpClient.get(endpoint).subscribe(function (data) {
            console.log('Data :: ' + data);
            callback(data);
        });
    };
    HttpServiceService.prototype.post = function (endpoint, bean, callback) {
        if (this.isLogout()) {
            console.log('inside isLogout return true');
            return true;
        }
        return this.httpClient.post(endpoint, bean).subscribe(function (data) {
            console.log(data);
            callback(data);
        }, function (error) {
            console.log('ORS Error--', error);
        });
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/jasper-report/jasper-report.component.css":
/*!***********************************************************!*\
  !*** ./src/app/jasper-report/jasper-report.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2phc3Blci1yZXBvcnQvamFzcGVyLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/jasper-report/jasper-report.component.html":
/*!************************************************************!*\
  !*** ./src/app/jasper-report/jasper-report.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  jasper-report works!\n</p>\n"

/***/ }),

/***/ "./src/app/jasper-report/jasper-report.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/jasper-report/jasper-report.component.ts ***!
  \**********************************************************/
/*! exports provided: JasperReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JasperReportComponent", function() { return JasperReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var JasperReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JasperReportComponent, _super);
    function JasperReportComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.JASPERREPORT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    JasperReportComponent.prototype.ngOnInit = function () {
        this.generateReport();
    };
    JasperReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jasper-report',
            template: __webpack_require__(/*! ./jasper-report.component.html */ "./src/app/jasper-report/jasper-report.component.html"),
            styles: [__webpack_require__(/*! ./jasper-report.component.css */ "./src/app/jasper-report/jasper-report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], JasperReportComponent);
    return JasperReportComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div id=\"loader\">\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"loading\"></div>\n    </div>\n\n    <p class=\"spinner-message\" *ngIf=\"message && message !== ''\">\n      {{message}}\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/login/forgotpassword.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login/forgotpassword.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:15%;background-image: url(../../assets/files/email.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form #loginForm=\"ngForm\">\n          \n          <div style=\"text-align: center;\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Forgot Password' | translate}}</h1>\n          </div>\n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"form.error == false && form.message == 'Password has been sent to email id'\"\n            class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\n              </div>\n            </div>\n          </div>\n\n          <span class=\"alertRedColor\">{{inputerror.loginId}}</span>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <button (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Reset My Password' | translate}}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/forgotpassword.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/forgotpassword.component.ts ***!
  \***************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(httpService, dataValidator, router) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8080/Auth";
        this.form = {
            error: false,
            message: "",
            loginId: '',
        };
        this.inputerror = {};
        this.message = '';
    }
    ForgotPasswordComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        return flag;
    };
    /**
     * Initialize component
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.get(_self.endpoint + "/fp/" + this.form.loginId, function (res) {
            console.log('MyResoonse', res);
            _self.form.message = '';
            _self.inputerror = {};
            console.log(res.result.message + '------>msg');
            if (res.result.message) {
                _self.form.message = res.result.message;
                console.log(_self.form.message + '-------> msg in sucess');
            }
            _self.form.error = !res.success;
            if (_self.form.error && res.result.inputerror) {
                _self.inputerror = res.result.inputerror;
            }
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/login/forgotpassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtHQUNUOzs7QUFFQTtJQUNDLFlBQVk7R0FDYjs7O0FBRUE7SUFDQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0UmVkQ29sb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cblxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcbiAgY29udGVudDogXCIqXCI7XHRcdFxuICBjb2xvcjogcmVkO1x0XHRcbiAgIH1cdFxuXG4gICAuc3VjY2Vzc0NvbG9ye1xuICAgIGNvbG9yOiBncmVlbjtcbiAgIH1cblxuICAgLmJ0bi1zcGFjZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"row \" style=\" padding-top: 5%; padding-bottom: 10%; background-image: url(../../assets/files/D33.jpg);\n  background-attachment: fixed;\n  background-size: cover; width:auto;\n    height: auto; \">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form>\n          <div style=\"text-align: center;\">\n            <h1 class=\"text-primary font-weight-bold\">{{'Log in' | translate}}</h1>\n          </div>\n          <input type=\"hidden\" name=\"loginUrl\" [(ngModel)]=\"form.loginUrl\" class=\"form-control\">\n          <div *ngIf=\"form.error && form.message == 'Invalid ID or Password'\"\n            class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"message != null && form.error\"\n            class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{message}}\n          </div>\n\n          <div *ngIf=\"form.error && form.message == 'Session Expired, Please Login Again'\"\n            class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:1%\">\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\n              </div>\n            </div>\n           <span  *ngIf=\"inputerror.loginId != null\"\n          class=\"alertRedColor\" style=\" color: red;\" > {{'loginId'| translate}} </span> \n          </div>\n           <!-- <span class=\"alertRedColor\">{{inputerror.loginId}}</span>  -->\n          <div style=\"padding-top:1%\">\n            <span><b>{{'Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text \"></i> </div>\n                </div>\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password' | translate}}\">\n              </div>\n            </div>\n            <span  *ngIf=\"inputerror.password != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span> \n\n            <!-- <span class=\"alertRedColor\">{{inputerror.password}}</span> -->\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <button (click)=\"signIn()\" class=\"btn btn-md btn-success\">\n                {{'Sign in' | translate}}</button>\n            </div>\n            &nbsp;&nbsp;&nbsp;\n            <div class=\"pl-3 pt-2\">\n              <a class=\"btn btn-warning\" href=\"/forgotpassword\">{{'Forgot Password' | translate}}</a>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer>\n\n</app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, dataValidator, router, cookieService, route) {
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
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.endpoint = "http://localhost:8080/Auth";
        this.form = {
            error: false,
            message: '',
            loginId: '',
            password: '',
            loginUrl: '',
            logout: '',
        };
        this.inputerror = {};
        this.message = '';
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
        // }
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("this run sign");
        this.mesag = localStorage.getItem("logmess");
        localStorage.removeItem("logmess");
        this.message = this.mesag;
        this.userSessionCheck();
        console.log(this.message);
        window.onpopstate = function (e) { window.history.forward(); };
    };
    LoginComponent.prototype.userSessionCheck = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            //  this.userList = params.get('userparams');    
            //  this.userparams=JSON.parse(this.route.snapshot.paramMap.get('userparams'));
            _this.userparams = JSON.parse(_this.route.snapshot.queryParamMap.get('userparams'));
            if (_this.userparams != null) {
                _this.form.message = _this.userparams.sessionExpiredMsg;
                _this.form.loginUrl = _this.userparams.url;
                console.log('URL-----------------------' + _this.userparams.url);
                //  console.log('Message-----------------------' + this.userparams.sessionExpiredMsg);
                //  console.log('Method Type-----------------------' + this.userparams.methodType);
            }
        });
        if (this.form.message != null) {
            this.form.error = true;
        }
    };
    LoginComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        console.log(this.form.loginId);
        flag = flag && this.dataValidator.isNotNull(this.form.password);
        console.log(this.form.password);
        return flag;
    };
    LoginComponent.prototype.signIn = function () {
        var _self = this;
        this.form.error = false;
        var requestedUrl = this.form.loginUrl;
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
                var tokenStr = "Bearer " + res.result.token;
                localStorage.setItem("token", tokenStr);
                localStorage.setItem("role", res.result.role);
                localStorage.setItem("fname", res.result.fname);
                localStorage.setItem("lname", res.result.lname);
                localStorage.setItem("userid", res.result.data.id);
                //   console.log(res.result.data.id + 'sessionId set ----');
                //   console.log(res.result.token + '  Token set ----');
                if (requestedUrl != null && requestedUrl != '') {
                    _self.router.navigateByUrl(requestedUrl);
                }
                else {
                    _self.router.navigateByUrl('dashboard');
                }
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/signup.component.html":
/*!*********************************************!*\
  !*** ./src/app/login/signup.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\" padding-top: 1%; padding-bottom:8%;background-image: url(../../assets/files/Index_page_sample_1.webp);\nbackground-attachment: fixed;\nbackground-size: 100%;  width:102%;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body \">\n        <form>\n          <div style=\"text-align: center;\">\n            <h3 class=\"text-primary font-weight-bold\">\n              {{'Sign Up' | translate}}\n            </h3>\n          </div>\n          <!-- <div *ngIf=\"form.error && form.error !=null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div> -->\n          <div *ngIf=\"!form.error && form.message != null && form.message.length>0\"\n            class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.firstName != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'firstname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.firstName}} </span> -->\n          </div>\n\n          <div >\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.lastName != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'lastname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.lastName}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Login id' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"email\" name=\"login\" [(ngModel)]=\"form.data.login\" class=\"form-control\"\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\n\n              </div>\n            </div><span  *ngIf=\"form.inputerror.login != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'email'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.login}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.password != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{password | translate}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Mobile' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div>\n            <span  *ngIf=\"form.inputerror.phone != null\"\n              class=\"alertRedColor\" style=\" color: red;\" > {{'phone'| translate}} </span>\n          </div>\n\n          <!-- <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.alternateMobile != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'mobile'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.phone}} </span> \n          <!-- </div>  -->\n\n          <div>\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [(ngModel)]=\"form.data.dob\" class=\"form-control\">\n              </div>\n            </div> <span  *ngIf=\"form.inputerror.dob != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'dob'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.dob}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\n                  <option value=\"Male\">{{'Male' | translate}} </option>\n                  <option value=\"Female\">{{'Female' | translate}} </option>\n                </select>\n              </div>\n            </div> <span  *ngIf=\"form.inputerror.gender != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'gender'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.gender}} </span> -->\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"pt-2\">\n\n\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Sign up' | translate}}</button>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"pt-2\">\n\n              <a class=\"btn btn-warning mr-1\" href=\"/signup\">{{'Reset' | translate}}</a>\n\n\n            </div>\n          </div>\n\n\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/signup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signup.component.ts ***!
  \*******************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(serviceLocator, httpService, dataValidator, router) {
        this.serviceLocator = serviceLocator;
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8080/Auth/signUp";
        this.form = {
            error: false,
            message: '',
            data: { id: null },
            inputerror: {},
        };
    }
    SignUpComponent.prototype.validate = function () {
        return this.validateForm(this.form);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    SignUpComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        flag = flag && validator.isNotNullObject(form.gender);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    /**
     * Initialize component
     */
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.reset = function () {
        this.router.navigate(['/signup']);
    };
    SignUpComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.post(this.endpoint, this.form.data, function (res) {
            console.log('MyResoonse', res);
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            _self.form.error = !res.success;
            if (_self.form.error && res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/login/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.html":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div style=\"background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;\npadding-top: 5%;\npadding-bottom: 24%;\nwidth:100%;\n  height: 100;\">\n  <form name=\"rollForm\" (ngSubmit)=\"go()\">\n    <div align=\"center\">\n      <div style=\"font-size: 80px;\">\n      <p class=\"font-weight-bold text-primary\">{{'Get Marksheet' | translate }}</p>\n    </div>\n    </div>\n    <div class=\"row pt-4 pb-4\">\n      <div class=\"col-sm-4 \"></div>\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\n        <input type=\"text\" name=\"rollNo\" id=\"rollNo\" class=\"form-control\" [(ngModel)]=\"form.data.rollNo\"\n          placeholder=\"{{'Enter Roll Number' | translate }}\">&emsp;</div>\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\n        <button type=\"submit\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n          {{'Search' | translate }}</button>\n        <a class=\"btn btn-primary\" href=\"/getmarksheet\"> {{'Reset' | translate}} </a>\n        \n        &emsp;\n\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-3\"></div>\n\n    </div>\n  </form>\n  <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    {{form.message}}\n  </div>\n  <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    {{form.message}}\n  </div>\n\n  <div class=\"container\" *ngIf=\"form.list.rollNo!= null\" >\n\n    <table width=\"100%\" class=\"table table-bordered table-striped table-hover\" border=\"3px\">\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'RollNO' | translate }}</th>\n        <td id=\"po1\" colspan=\"3\">{{form.list.rollNo}}</td>\n      </tr>\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'Name' | translate }}</th>\n        <td id=\"po1\" colspan=\"3\">{{form.list.name}}</td>\n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Marks' | translate }}</th>\n        <th align=\"center\" id=\"po1\">{{'Max Marks' | translate }}</th>\n        <th  align=\"center\" id=\"po1\">{{'Min Marks' | translate }}</th>\n        <th  align=\"center\" id=\"po1\">{{'Marks Obtain' | translate }}</th>\n      </tr>\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'Subject' | translate }}</th>\n        \n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Physics' | translate }}</th>\n        <td align=\"center\">100</td>\n        <td align=\"center\">35</td>\n        <td id=\"po1\" align=\"center\">\n          <!-- <span style=\"color: red;\">{{form.list.physics}}*</span> -->\n          <span [ngStyle]=\"{'color': (form.list.physics >35) ? 'green': 'red' }\">{{form.list.physics}}</span>\n          \n        </td>\n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Chemistry' | translate }}</th>\n        <td align=\"center\">100</td>\n        <td align=\"center\">35</td>\n        <td id=\"po1\" align=\"center\">\n          <!-- <span style=\"color: red;\">{{form.list.chemistry}}*</span>  -->\n          <span [ngStyle]=\"{'color': (form.list.chemistry >35) ? 'green': 'red' }\">{{form.list.chemistry}}</span>\n        </td>\n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Maths' | translate }}</th>\n        <td align=\"center\">100</td>\n        <td align=\"center\">35</td>\n        <td id=\"po1\" align=\"center\">\n          <!-- <span style=\"color: red;\">{{form.list.maths}}*</span> -->\n          <span [ngStyle]=\"{'color': (form.list.maths >35) ? 'green': 'red' }\">{{form.list.maths}}</span>\n        </td>\n      </tr>\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'Total' | translate }}</th>\n\n        <td id=\"po1\" colspan=\"3\" align=\"center\">{{form.list.maths+form.list.physics+form.list.chemistry}}</td>\n      </tr>\n      <tr>\n\n        <th id=\"po1\" colspan=\"2\">{{'Percentage' | translate }}</th>\n\n        <td id=\"po1\" colspan=\"3\" align=\"center\">\n          {{((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 | number:'2.0-2' }}%\n        \n          \n        \n        \n        </td>\n      </tr>\n     <!--  <tr>\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\n          <font color=\"blue\">{{'Grade' | translate }}</font>\n        </th>\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\n          <font color=\"green\"><b>{{'PASS' | translate }}</b></font>\n        </td>\n      </tr> -->\n\n      <!-- <tr>\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>\n          <font color=\"red\"><b>F</b></font>\n        </th>\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\n          <font color=\"red\"><b>{{'FAIL' | translate }}</b></font>\n        </td>\n      </tr> -->\n      <tr>\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>         \n        </th>\n        <td id=\"po1\" align=\"center\" colspan=\"3\"  *ngIf=\"((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 > 35; else elseBlock\">\n\n          <font color=\"green\"><b>{{'Pass' | translate }}</b></font>\n        </td>\n        <ng-template #elseBlock><td id=\"po1\" align=\"center\" colspan=\"3\" ><font color=\"red\"><b>{{'Fail' | translate }}</b></font></td></ng-template>\n      </tr>\n\n    </table>\n    \n</div><div style=\"position: relative; clear: both;\">\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.ts ***!
  \*****************************************************/
/*! exports provided: GetmarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetmarksheetComponent", function() { return GetmarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var GetmarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GetmarksheetComponent, _super);
    function GetmarksheetComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, rollNo: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    GetmarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    GetmarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.rollNo);
        return flag;
    };
    GetmarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.rollNo = data.rollNo;
    };
    GetmarksheetComponent.prototype.go = function () {
        var _self = this;
        console.log("onClickSubmit");
        console.log(this.form.data);
        console.log(this.form.data.rollNo);
        this.httpservice.get("http://localhost:8080/Marksheet/rollno/" + this.form.data.rollNo, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    GetmarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getmarksheet',
            template: __webpack_require__(/*! ./getmarksheet.component.html */ "./src/app/marksheet/getmarksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], GetmarksheetComponent);
    return GetmarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 8%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <!-- <div class=\"col-sm-6 p-1 text-center\"> -->\n          <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Marksheet List' | translate}}</h1>\n        </div>\n      </div>\n    \n      <div class=\"row  pt-4 pb-4 \" style=\"margin-left:25%\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\" placeholder=\"{{'Search Name'| translate}}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.rollNo\" placeholder=\"{{'Search Roll No'| translate}}\">\n          \n        </div>\n\n       <!--  <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search'| translate}}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/marksheet')\" type=\"button\" class=\"btn btn-success\">{{'Add Marksheet'| translate}}\n          </button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div> -->\n\n        <div class=\"marksBtn-group\">\n          <div>\n            <button (click)=\"submit()\" class=\"btn btn-primary\">\n              {{'Search'| translate}}\n            </button>\n          </div>\n          <div class=\"addMarksheetBtn-group\">\n            <button (click)=\"forward('/marksheet')\" type=\"button\" class=\"btn btn-success\">{{'Add Marksheet'| translate}}\n            </button>\n          </div>\n          <div class=\"deleteBtn\"> \n            <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n              {{'Delete'| translate}}\n            </button>\n          </div>\n        </div>\n\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n     \n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No'| translate}}</th>\n                <th>{{'RollNO'| translate}}</th>\n                <th>{{'Name'| translate}}</th>\n                <th>{{'Physics'| translate}}</th>\n                <th>{{'Chemistry'| translate}}</th>\n                <th>{{'Maths'| translate}}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <!-- <td> <input type=\"checkbox\" name=\"list_name\" value=\"{{isMasterSel}}\" [(ngModel)]=\"isMasterSel\" (change)=\"isAllSelected()\"/>\n                  </td> -->\n                  <td> <input type=\"checkbox\"  #checkboxes  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                  </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.rollNo }} </td>\n                <td> {{ m.name }} </td>\n                <td> {{ m.physics }} </td>\n                <td> {{ m.chemistry }} </td>\n                <td> {{ m.maths }} </td>\n                <td>\n                  <a (click)=\"forward( '/marksheet/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  \n                  <!-- <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n                \n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <!-- <div class=\"row p-1 justify-content-center\">\n          <div class=\"col-lg-10\">\n            <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate}} </button>\n          </div>\n\n           <div class=\"row p-1\" >\n            <div class=\"col-lg-5\">\n            \n            <a class=\"btn btn-warning mr-1\" href=\"/marksheetlist\">{{'Back' | translate}}</a>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          \n\n          <div class=\"col-lg-1\">\n            <button (click)=\"next()\" [disabled]=\"form.list.length < 5\" class=\"btn btn-info\">{{'Next' | translate}} </button>\n          </div>\n        </div>  -->\n\n        <div class=\"btnList justify-content-center\">\n          <div>\n            <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info previous\"> {{'Previous' |\n              translate }}\n            </button>\n          </div>\n\n            <div>\n            <a class=\"btn btn-warning mr-1\" href=\"/marksheetlist\">{{'Back' | translate}}</a>\n            </div>\n\n          <div>\n            <button (click)=\"next()\" [disabled]=\"form.list.length5\" type=\"button\" class=\"btn btn-info next\">\n              {{'Next' | translate }}\n            </button>\n          </div>\n        </div>\n\n      </div>\n    \n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MarksheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetListComponent", function() { return MarksheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MarksheetListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetListComponent, _super);
    function MarksheetListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MarksheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet-list',
            template: __webpack_require__(/*! ./marksheet-list.component.html */ "./src/app/marksheet/marksheet-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MarksheetListComponent);
    return MarksheetListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n    \n}\n\n\n.addMarkBtn{\n\n    display:flex;\n}\n\n\n.btnList{\n    display: flex;\n    margin: auto;\n}\n\n\n.previous {\n    margin: 0 20px 0 0; \n  }\n\n\n.back{\n    margin: 0 20px 0 20px;\n  }\n\n\n.next {\n     margin: 0 0 20px 15px; \n  }\n\n\n.marksBtn-group{\n     display: flex;\n\n  }\n\n\n.deleteBtn{\n    margin: 0 0 0 10px;\n  }\n\n\n.addMarksheetBtn-group{\n    margin: 0 0 0 10px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya3NoZWV0L21hcmtzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0dBQ1Q7OztBQUVBO0lBQ0MsWUFBWTtHQUNiOzs7QUFFQTtJQUNDLGlCQUFpQjs7QUFFckI7OztBQUVBOztJQUVJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksa0JBQWtCO0VBQ3BCOzs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7O0FBRUE7S0FDRyxxQkFBcUI7RUFDeEI7OztBQUVBO0tBQ0csYUFBYTs7RUFFaEI7OztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOzs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21hcmtzaGVldC9tYXJrc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5cbi5yZXF1aXJlZC1maWVsZDo6YWZ0ZXIgeyBcdFx0XG4gIGNvbnRlbnQ6IFwiKlwiO1x0XHRcbiAgY29sb3I6IHJlZDtcdFx0XG4gICB9XHRcblxuICAgLnN1Y2Nlc3NDb2xvcntcbiAgICBjb2xvcjogZ3JlZW47XG4gICB9XG5cbiAgIC5idG4tc3BhY2Uge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIFxufVxuXG4uYWRkTWFya0J0bntcblxuICAgIGRpc3BsYXk6ZmxleDtcbn1cblxuLmJ0bkxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5wcmV2aW91cyB7XG4gICAgbWFyZ2luOiAwIDIwcHggMCAwOyBcbiAgfVxuXG4gIC5iYWNre1xuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgfVxuXG4gIC5uZXh0IHtcbiAgICAgbWFyZ2luOiAwIDAgMjBweCAxNXB4OyBcbiAgfVxuXG4gIC5tYXJrc0J0bi1ncm91cHtcbiAgICAgZGlzcGxheTogZmxleDtcblxuICB9XG5cbiAgLmRlbGV0ZUJ0bntcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gIH1cblxuICAuYWRkTWFya3NoZWV0QnRuLWdyb3Vwe1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;background-image: url(../../assets/files/D2.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form name =\"marksheetForm\">\n          <div class=\"text-center\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Marksheet' | translate}}</h2>\n          </div>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Marksheet' | translate}}</h2>\n          \n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Roll No' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"rollNo\" [(ngModel)]=\"form.data.rollNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Roll No' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.rollNo}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Student' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                \n\n                <select class=\"form-control\" required name=\"studentId\"\n                  [(ngModel)]=\"form.data.studentId\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Student' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.studentList\" [value]=\"obj.id\">{{obj.firstName + ' ' +obj.lastName }}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.studentId}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Physics' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bullseye grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phy\" [(ngModel)]=\"form.data.physics\" class=\"form-control\"\n                  placeholder=\"{{'Enter Physics Marks' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.physics}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Chemistry' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"chemistry\" [(ngModel)]=\"form.data.chemistry\" class=\"form-control\"\n                  placeholder=\"{{'Enter Chemistry Marks' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.chemistry}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Maths' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-pencil grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"math\" [(ngModel)]=\"form.data.maths\" class=\"form-control\"\n                  placeholder=\"{{'Enter Maths Marks'| translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.maths}} </span>\n          </div>\n\n          <!-- <div class=\"addMarkBtn\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update'| translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/marksheetlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'Back'| translate}}\n              </button>\n            </div>\n          </div>\n -->\n\n <div class=\"row pt-3 pl-3 pb-3\">\n              <div class=\"col-md-3\"></div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" \n                class=\"btn btn-success mr-2\">\n                {{'Save'  | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/marksheetlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List'| translate}}\n              </button></div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.ts ***!
  \**************************************************/
/*! exports provided: MarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetComponent", function() { return MarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var MarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetComponent, _super);
    function MarksheetComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    MarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        console.log('Student name :: ' + form.name);
        flag = flag && validator.isNotNullObject(form.rollNo);
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.physics);
        flag = flag && validator.isNotNullObject(form.chemistry);
        flag = flag && validator.isNotNullObject(form.maths);
        return flag;
    };
    MarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.studentId = data.studentId;
        form.rollNo = data.rollNo;
        form.physics = data.physics;
        form.chemistry = data.chemistry;
        form.maths = data.maths;
        console.log('Populated Form', form);
    };
    MarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet',
            template: __webpack_require__(/*! ./marksheet.component.html */ "./src/app/marksheet/marksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MarksheetComponent);
    return MarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 1%;padding-bottom: 1%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"col-sm-12 pt-3\"> \n          <h4 class=\"text-primary text-center font-weight-bold\">{{'Marksheet Merit List' | translate}}</h4>\n        </div>\n      </div>\n\n      <!-- <div style=\"margin-left: 87%;\" class=\"pb-2\">\n\n        <a href=\"\" (click)=\"forward( '/jasperReport')\" class=\"btn btn-lg btn-primary \" role=\"button\"  target=\"blank\">\n          <span class=\"fa fa-print mr-1\"></span>{{'Print' | translate}}</a>\n      </div> -->\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n              <th >{{'S.No' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'RollNO' | translate}}  </th>\n\t\t\t\t\t\t\t<th >{{'Name' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Physics' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Chemistry' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Maths' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Total' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Percentage(%)' | translate}}</th>\n\t\t\t\t\t\t</tr>\n          </thead>\n\n          <tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let m of form.list; let i = index\" >\n\t\t\t\t\t\t\t<td>{{(form.pageNo*5)+i+ 1}} </td>\n\t\t\t\t\t\t\t<td >{{m.rollNo}}</td>\n\t\t\t\t\t\t\t<td >{{m.name}}</td>\n\t\t\t\t\t\t\t<td >{{m.physics}}</td>\n              <td> {{m.chemistry}}</td>\n              <td> {{m.maths}}</td>\n              <td>{{m.physics+m.maths+m.chemistry}}</td>\n              <td>{{((m.physics+m.maths+m.chemistry)*100)/300 | number:'2.0-2' }}%</td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n          </tbody>\n          </table>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div><app-footer>\n  \n</app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.ts ***!
  \************************************************************/
/*! exports provided: MarksheetmeritListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetmeritListComponent", function() { return MarksheetmeritListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var MarksheetmeritListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetmeritListComponent, _super);
    function MarksheetmeritListComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        return _this;
    }
    MarksheetmeritListComponent.prototype.ngOnInit = function () {
        this.getMeritList();
    };
    MarksheetmeritListComponent.prototype.getMeritList = function () {
        var _self = this;
        this.httpservice.get("http://localhost:8080/Marksheet/meritlist", function (res) {
            if (res.success) {
                _self.form.list = res.result.list;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    MarksheetmeritListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheetmerit-list',
            template: __webpack_require__(/*! ./marksheetmerit-list.component.html */ "./src/app/marksheet/marksheetmerit-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], MarksheetmeritListComponent);
    return MarksheetmeritListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/message/message-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/message/message-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat, repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"col-sm-6 p-1\">\n          <h4 class=\"text-primary font-weight-bold\">{{'Message List' | translate}}</h4>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n\n        <div class=\"col-sm-3\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subject\"\n            placeholder=\"{{'Search Subject' | translate}}\">\n        </div>\n        <div class=\"col-sm-3\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.body\"\n            placeholder=\"{{'Search Body' | translate}}\">\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate}}</button></div>\n        <div class=\"col=sm-1\">\n          <button (click)=\"forward('/message')\" type=\"button\" class=\"btn btn-success\">{{'Add Message'| translate}}\n          </button></div>\n\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-lg-1\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous'| translate}}\n          </button>\n        </div>\n        <div class=\"col-lg-1\">\n          <button (click)=\"next()\" class=\"btn btn-info\">{{'Next'| translate}} </button>\n        </div>\n        <div class=\"col-lg-2\">\n\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th>{{'S.No'| translate}}</th>\n                <th>{{'Code'| translate}}</th>\n                <th>{{'Subject' | translate}}</th>\n                <th>{{'Body'| translate}}</th>\n                <th>{{'Type'| translate}}</th>\n                <th>{{'Status'| translate}}</th>\n                <th>#</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.code }} </td>\n                <td> {{ m.subject }} </td>\n                <td> {{ m.body }} </td>\n                <td> {{ m.type }} </td>\n                <td> {{ m.status }} </td>\n                <td>\n                  <a (click)=\"forward( '/message/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/message/message-list.component.ts ***!
  \***************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var MessageListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageListComponent, _super);
    function MessageListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/message/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageListComponent);
    return MessageListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Message' | translate}}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Message' | translate}} </h2>\n\n\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div> -->\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Type' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-comment grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"type\" [(ngModel)]=\"form.data.type\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Type' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.type}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Code' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-commenting grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"code\" id=\"code\" [(ngModel)]=\"form.data.code\"\n                  style=\"cursor: pointer;\">\n                  <option selected=\"true\">{{'Please select'  | translate }}</option>\n                  <option value=\"U-FP\">U-FP </option>\n                  <option value=\"U-REG\">U-REG </option>\n                  <option value=\"U-CP\">U-CP</option>\n                </select>\n\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.code}}</span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-comments grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"subject\" [(ngModel)]=\"form.data.subject\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Subject'| translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Body' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"body\" [(ngModel)]=\"form.data.body\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Body' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.body}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Status' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"status\" [(ngModel)]=\"form.data.status\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Status' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'HTML' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"html\" [(ngModel)]=\"form.data.html\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message HTML' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.html}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate}}</button>\n            </div>\n\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/messagelist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\n              </button></div>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var MessageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageComponent, _super);
    function MessageComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.type);
        flag = flag && validator.isNotNullObject(form.code);
        flag = flag && validator.isNotNullObject(form.subject);
        flag = flag && validator.isNotNullObject(form.body);
        return flag;
    };
    MessageComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.code = data.code;
        form.type = data.type;
        form.subject = data.subject;
        form.body = data.body;
        form.status = data.status;
        form.html = data.html;
        console.log('Populated Form', form);
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageComponent);
    return MessageComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\n  .raj{\n  background-image : linear-gradient(to bottom right,#C33764, #1D2671);\n  \n  }\n  /* #C33764, #1D2671\n  ,#0D324D, #000000  */\n  </style>\n\n<div class=\"header\">\n  <nav *ngIf=\"!isLogin()\" class=\"navbar navbar-expand-lg raj\">\n    <div class=\"logo\">\n      <a class=\"nav-link\" href=\"/dashboard\">\n        <!-- <strong class=\"text-white\">Rays</strong> -->\n        <img src=\"assets\\files\\logo.png\" height=\"40\" width=\"100px\">\n      </a>\n    </div>\n\n    <!-- <select #locale (change)='changeLocale(locale.value)'>\n      <option value=\"0\">{{'Select' | translate}}</option>\n\n      <option value=\"en\">English</option>\n      <option value=\"hi\">Hindi</option>\n    </select> -->\n    <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n  \n    \n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\" style=\"font-size: 15px;\">\n      <ul class=\"navbar-nav ml-auto\" style=\"padding-right: 10.5%;\">\n        <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"myNav\" id=\"navbarDropdown\" role=\"button\"\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <font style=\"color: red; size: 38px;\"> <b> {{'Hi,Guest'| translate}} </b>\n            </font>\n\n          </a>\n\n          <div class=\"dropdown-menu\" id=\"myNav\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"/login\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; <b> {{'Log in' | translate}} </b>\n            </a>\n            <a class=\"dropdown-item\" href=\"/signup\"><i class=\" fa fa-users\"></i> &nbsp;  <b> {{'User Registration' | translate}}</b>\n            </a>\n          </div>\n        </li>\n        <li>\n\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n\n\n<nav *ngIf=\"isLogin()\" class=\"navbar navbar-expand-lg raj\">\n\n  <div class=\"logo\">\n    <a class=\"nav-link\" href=\"/dashboard\">\n      <!-- <strong class=\"text-white\">Rays</strong> -->\n      <img src=\"assets\\files\\logo.png\" height=\"40px\" width=\"100px\">\n    </a>\n  </div>\n  <!-- <strong class=\"text-white\">NCS Pvt Ltd</strong> -->\n\n\n  <!-- <select #locale (click)='changeLocale(locale.value)'>\n    <option value=\"0\">{{'Select'| translate }}</option>\n\n    <option value=\"en\">English</option>\n    <option value=\"hi\">{{'Hindi' | translate }}</option>\n  </select> -->\n\n\n  <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <select #locale (click)='changeLocale(locale.value)'>\n      <option value=\"0\">{{'Select'| translate }}</option>\n  \n      <option value=\"en\">English</option>\n      <option value=\"hi\">{{'Hindi' | translate }}</option>\n    </select>\n\n\n    <div class=\"col-md\"></div> \n    <!-- <div class=\"container-fluid\"> -->\n    <ul class=\"nav navbar-nav pl-2\" style=\"margin-right: 3.5%;\">\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'User' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/user']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add User' |\n            translate}}</a>\n          <a class=\"dropdown-item\" href=\"/userlist\"><i class=\"fa fa-list\"></i>&nbsp; {{'User List' | translate}}</a>\n        </div>\n      </li>\n\n      <!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Message' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/message']\"><i\n              class=\"fa fa-comment\"></i>{{'Add Message' | translate}}</a>\n          <a class=\"dropdown-item\" href=\"/messagelist\"><i\n              class=\"fa fa-list\"></i>{{'Message List' | translate}}</a>\n        </div>\n      </li> -->\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Marksheet' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/marksheet']\"><i class=\"fa fa-file\"></i> &nbsp; {{'Add Marksheet' |\n            translate}}</a> <a class=\"dropdown-item\" href=\"/marksheetlist\"><i class=\"fa fa-paste\"></i> &nbsp;\n            {{'Marksheet List' | translate}}</a> <a class=\"dropdown-item\" href=\"/marksheetmeritlist\"><i\n              class=\" fa fa-list\"></i> &nbsp; {{'Marksheet Merit List' | translate}} </a>\n          <a class=\"dropdown-item\" href=\"/getmarksheet\"><i class=\"fa fa-copy\"></i> &nbsp; {{'Get Marksheet' |\n            translate}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Role' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/role']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; {{'Add Role' |\n            translate}}</a> <a class=\"dropdown-item\" href=\"/rolelist\"><i class=\"fa fa-users\"></i> &nbsp; {{'Role List' |\n            translate}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'College' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/college']\"><i class=\"fa fa-university\"></i> &nbsp; {{'Add College' |\n            translate}}</a> <a class=\"dropdown-item\" href=\"/collegelist\"><i class=\"fa fa-building\"></i> &nbsp;\n            {{'College List' | translate}} </a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Course' | translate}}\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/course']\"><i class=\"fa fa-book\"></i> &nbsp; {{'Add Course' |\n            translate}}</a> <a class=\"dropdown-item\" href=\"courselist\"><i class=\"fa fa-list\"></i> &nbsp; {{'Course List'\n            | translate}} </a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Student' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/student']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Student' |\n            translate}}</a> <a class=\"dropdown-item\" href=\"/studentlist\"><i class=\"fa fa-users\"></i> &nbsp; {{'Student\n            List' | translate}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Faculty' | translate}}\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/faculty']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Add Faculty' |\n            translate}}</a> <a class=\"dropdown-item\" href=\"/facultylist\"><i class=\" fa fa-list\"></i> &nbsp; {{'Faculty\n            List' | translate}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'TimeTable' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/timetable']\"><i class=\"fa fa-clock-o\"></i> &nbsp; {{'Add TimeTable'\n            | translate}}</a> <a class=\"dropdown-item\" href=\"/timetablelist\"><i class=\"fa fa-list\"></i> &nbsp;\n            {{'TimeTable List' | translate}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Subject' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/subject']\"><i class=\"fa fa-calculator\"></i> &nbsp; {{'Add Subject' |\n            translate}}</a> <a class=\"dropdown-item\" href=\"/subjectlist\"> <i class=\"fa fa-list\"></i> &nbsp; {{'Subject\n            List' | translate}}\n          </a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" href=\"#\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{form.data.fname | translate}} ({{form.data.role  | translate}})\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n\n          <a class=\"dropdown-item\" (click)=\"forward()\"><i class=\" fa fa-user-md\"></i> &nbsp; {{'My Profile' |\n            translate}}</a>\n          <a class=\"dropdown-item\" href=\"/changepassword\"><i class=\" fa fa-key\"></i> &nbsp; {{'Change Password' |\n            translate}}</a>\n          <a class=\"dropdown-item\" href=\"../../assets/doc/index.html\" target=\"blank\"><i class=\"fa fa-file\"></i> &nbsp;\n            {{'Java Doc' | translate}}</a>\n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\" fa fa-lock\"></i> &nbsp;&nbsp;{{'Log Out' | translate}}</a>\n\n          \n          \n        </div>\n      </li>\n    </ul>\n  <!-- </div> -->\n  </div>\n</nav>\n\n<div>\n\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, route, httpService, myservice, servicelocator) {
        this.translate = translate;
        this.route = route;
        this.httpService = httpService;
        this.myservice = myservice;
        this.servicelocator = servicelocator;
        this.form = {
            error: false,
            message: null,
            firstName: null,
            data: { id: null, fname: null, lname: null, role: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
        };
        console.log('DefaultLang ' + localStorage.getItem("locale"));
        if (localStorage.getItem("locale") != null) {
            translate.setDefaultLang(localStorage.getItem("locale"));
        }
        else {
            translate.setDefaultLang("en");
        }
    }
    NavbarComponent.prototype.changeLocale = function (locale) {
        localStorage.setItem("locale", locale);
        this.translate.use(localStorage.getItem("locale"));
        console.log('Locale ' + locale);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        // var _self = this;
        // this.httpService.get("http://localhost:8080/Auth/menu",function (res){
        //   if(res.success){
        //     _self.form.list = res.result.list;
        //   }else{
        //     _self.form.error = false;
        //     _self.form.message = res.result.message;
        //   }
        //   console.log('FORM', _self.form);
        // });
    };
    NavbarComponent.prototype.forward = function () {
        this.userid = localStorage.getItem("userid");
        console.log('UID---' + this.userid);
        this.servicelocator.forward("/user/" + this.userid);
    };
    NavbarComponent.prototype.isLogin = function () {
        var check = localStorage.getItem('fname');
        if (check != "null" && check != null) {
            this.form.data.fname = localStorage.getItem("fname");
            this.form.data.lname = localStorage.getItem("lname");
            this.form.data.loginId = localStorage.getItem("loginId");
            this.form.data.role = localStorage.getItem("role");
            // console.log('fname is ---->>>' + this.form.data.fname);
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.logout = function () {
        var _self = this;
        console.log('Logout', this.form);
        // let url = this.servicelocator.endpoints.getEndpoint(this.servicelocator.endpoints.AUTH, "logout");
        // this.servicelocator.httpService.post(url, this.form, function (res, error) {
        //   if (error) {
        //     alert(error);
        //     return;
        //   }
        _self.loginId = "null";
        localStorage.removeItem("token");
        localStorage.removeItem("fname");
        localStorage.removeItem("lname");
        localStorage.removeItem("loginId");
        localStorage.removeItem("role");
        console.log('After logout jsessionid---' + localStorage.getItem("JSESSIONID"));
        this.form.message = "Logout Successfully";
        localStorage.setItem("logmess", "Logged Out Succesfully");
        _self.servicelocator.router.navigateByUrl('/login');
        //  _self.httpService.get("http://localhost:8080/User/logout",function (res){
        //   if(res.success){
        //     _self.form.list = res.result.data;
        //     localStorage.removeItem("JSESSIONID");
        //     _self.servicelocator.router.navigateByUrl('/login');
        //     if(_self.form.list.length == 0){
        //       _self.form.message = "No record found";
        //       _self.form.error = true;
        //     }
        //     console.log("List Size",_self.form.list.length );
        //   }else{
        //     _self.form.error = false;
        //     _self.form.message = res.result.message;
        //   }
        //   console.log('FORM', _self.form);
        // });
        // });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.html":
/*!***********************************************!*\
  !*** ./src/app/page-not-found.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>{{message}}</h1>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.message = 'Page not found, URL may be invalid';
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/role/role-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/role/role-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 8; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n    <div class=\"container-fluid\">\n\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\" style=\"height: 50px;\">\n               <!--  <div class=\"col-sm-6 p-1\"> -->\n                    <div class=\"text-center\">\n                    <h1 class=\"text-primary font-weight-bold\">{{'Role List' | translate }}</h1>\n                </div>\n            </div>\n\n            <div class=\"roleBtn-Group justify-content-center\">\n                <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n                        placeholder=\"{{'Search Name' | translate }}\">\n                </div>\n\n\n                <!-- <div class=\"col-sm-1 ml-3\">\n                    <button (click)=\"submit()\" class=\"btn btn-primary\">\n                        {{'Search' | translate }}</button>\n                </div>\n                <div class=\"col-lg-2 ml-4\">\n                    <button (click)=\"forward('/role')\" type=\"button\" class=\"btn btn-success\">{{'Add Role' | translate }}\n                    </button>\n                </div>\n                <div class=\"col-sm-1\">\n                    <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n                      {{'Delete'| translate}}</button>\n                  </div> -->\n                  <div>\n                    <button (click)=\"submit()\" class=\"btn btn-primary searchBtn\">\n                      {{'Search' | translate }}\n                    </button>\n                  </div>\n                  <div class=\"addRoleBtn-Group\">\n                    <button (click)=\"forward('/user')\" type=\"button\" class=\"btn btn-success addBtn\">\n                      {{'Add Role' | translate}}\n                    </button>\n                  </div>\n                  <div> \n                    <button (click)=\"deleteMany()\" class=\"btn btn-danger deleteBtn\">\n                      {{'Delete'| translate}}\n                    </button>\n                  </div>\n            </div>\n            \n            \n            <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                {{form.message}}\n              </div>\n              <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                {{form.message}}\n              </div>\n\n          \n\n            <div class=\"p-1\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-striped table-hover\">\n                        <thead class=\"thead-light text-uppercase\">\n                            <tr>\n                                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                                <th>{{'S.No' | translate }}</th>\n                                <th>{{'Name' | translate }}</th>\n                                <th>{{'Description' | translate }}</th>\n                                <th>{{'Edit' | translate}}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let m of form.list; let i = index\">\n                                <td> <input type=\"checkbox\"  #checkboxes  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                                </td>\n                                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                                <td> {{ m.name }} </td>\n                                <td> {{ m.description }} </td>\n                                <td>\n                                    <a (click)=\"forward( '/role/' +  m.id)\" style=\"cursor: pointer;\">\n                                        <i class=\"fa fa-edit text-info\"></i>\n                                    </a>\n                                    <!-- /\n                                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                                        <i class=\"fa fa-trash text-danger\"></i>\n                                    </a> -->\n                                </td>\n                                \n                            </tr>\n                            \n                        </tbody>\n                        \n                    </table>\n                    <div class=\" btnRoleList justify-content-center\">\n                        <div class=\"previousBtn\">\n                            <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate }} </button>\n                        </div>\n                        \n                        <div class=\"nextBtn\">\n                            <button (click)=\"next()\" [disabled]=\"form.list.length < 5 \" class=\"btn btn-info\">{{'Next' | translate }} </button>\n                        </div>\n                        </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-list.component.ts ***!
  \*********************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RoleListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleListComponent, _super);
    function RoleListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/role/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RoleListComponent);
    return RoleListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n.roleBtn-Group{\n    display: flex;\n}\n\n.addRoleBtn-Group{\n    margin: 0 10px 0 10px;\n}\n\n.btnRoleList{\n    display: flex;\n}\n\n.previousBtn{\n    margin: 0 10px 0 0;\n}\n\n.btnList{\n    display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yb2xlL3JvbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ucm9sZUJ0bi1Hcm91cHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkUm9sZUJ0bi1Hcm91cHtcbiAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG59XG5cbi5idG5Sb2xlTGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJldmlvdXNCdG57XG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xufVxuXG4uYnRuTGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:9%;background-image: url(../../assets/files/D1.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form >\n          <div class=\"text-center\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Role' | translate }}</h2>\n        </div>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Role' | translate }}</h2>\n  \n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  placeholder=\"{{'Enter Role Name' | translate }}\">\n              </div>\n            </div>\n          </div>\n        <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n        \n        <div style=\"padding-top:3%\">\n            <span><b>{{'Description' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\n                </div>\n                <textarea  name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\n          </div>\n\n\n          <div class=\"btnList justify-content-center\" style=\"margin-top: 10%;\">\n            <div class=\"saveBtn \">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"    class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div>\n              <button  *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            \n            <div>\n              <button (click)=\"forward('/rolelist')\" class=\"btn btn-md btn-warning\">\n                {{'List' | translate }}</button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var RoleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleComponent, _super);
    function RoleComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    RoleComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    RoleComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.status = data.status;
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RoleComponent);
    return RoleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/service-locator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service-locator.service.ts ***!
  \********************************************/
/*! exports provided: ServiceLocatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return ServiceLocatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");






var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(hs, dv, r, ep) {
        this.hs = hs;
        this.dv = dv;
        this.r = r;
        this.ep = ep;
        this.httpService = null;
        this.dataValidator = null;
        this.router = null;
        this.endpoints = null;
        console.log("Hello java------------------->>>");
        this.httpService = hs;
        this.dataValidator = dv;
        this.router = r;
        this.endpoints = ep;
    }
    /**
     * get path variable from url
     *
     * @param route
     * @param callback
     */
    ServiceLocatorService.prototype.getPathVariable = function (route, callback) {
        route.params.subscribe(function (params) {
            callback(params);
        });
    };
    /**
     * Forward to page
     *
     * @param page
     */
    ServiceLocatorService.prototype.forward = function (page) {
        this.router.navigateByUrl(page);
    };
    ServiceLocatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__["EndpointServiceService"]])
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  spinner works!\n</p>\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/student/student-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/student/student-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 1%; padding-bottom: 4%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <!-- <div class=\"col-sm-6 p-1\"> -->\n          <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Student List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.enrolNo\" placeholder=\"{{'Search Enrollment' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\" placeholder=\"{{'Search College' | translate }}\">\n        </div>\n        \n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.email\" placeholder=\"{{'Search Email' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNo\" placeholder=\"{{'Search Mobile Number' | translate }}\">\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n      \n\n      \n        <div class=\"col-lg-2\">\n          <button (click)=\"forward('/student')\" type=\"button\" class=\"btn btn-success\">{{'Add Student' | translate }}\n          </button>\n        </div>\n      \n\n      <div class=\"col-sm-1\">\n        <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n          {{'Delete'| translate}}</button>\n      </div>\n    </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No' | translate }}</th>\n                <th>{{'Enrollment No' | translate }}</th>\n                <th>{{'First Name' | translate }}</th>\n                <th>{{'Last Name' | translate }}</th>\n                <th>{{'College' | translate }}</th>\n                <th>{{'DOB' | translate }}</th>\n                <th>{{'Mobile' | translate }}</th>\n                <th>{{'Email' | translate }}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td><input type=\"checkbox\"  #checkboxes  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td>{{m.enrolNo}}</td>\n                <td> {{ m.firstName }} </td>\n                <td> {{ m.lastName }} </td>\n                <td> {{ m.collegeName }} </td>\n                <td>{{m.dob | date : 'dd-MM-yyyy'}}</td>\n                <td> {{ m.phoneNo }} </td>\n                <td> {{ m.email }} </td>\n                <td>\n                  <a (click)=\"forward( '/student/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"studentBtn-Group justify-content-center\">\n\n            <div class=\"previous\">\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate }} </button>\n            </div>\n            \n            <div class=\"next\">\n              <button (click)=\"next()\" [disabled]=\"form.list.length < 5\" class=\"btn btn-info\">{{'Next' | translate }} </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-list.component.ts ***!
  \***************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var StudentListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentListComponent, _super);
    function StudentListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentListComponent);
    return StudentListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n\n\n.studentBtn-Group{\n    display: flex;\n\n}\n\n\n.previous{\n    margin: 0 10px 0 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0UmVkQ29sb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cblxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcbiAgY29udGVudDogXCIqXCI7XHRcdFxuICBjb2xvcjogcmVkO1x0XHRcbiAgIH1cdFxuXG4gICAuc3VjY2Vzc0NvbG9ye1xuICAgIGNvbG9yOiBncmVlbjtcbiAgIH1cblxuICAgLmJ0bi1zcGFjZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdHVkZW50QnRuLUdyb3Vwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuLnByZXZpb3Vze1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;background-image: url(../../assets/files/D1.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <div class=\"text-center\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Student' | translate }}</h2>\n          </div>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Student' | translate }}</h2>\n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Enrollment No' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"enrolNo\" [(ngModel)]=\"form.data.enrolNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Enrollment Number' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.enrolNo}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"firstN\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"lastN\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'College' | translate }} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                </div>\n\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select College' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.collegeId}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email' | translate }} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\n                  placeholder=\"{{'Enter Email Id' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\n          </div>\n          \n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Mobile No' | translate }} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/studentlist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var StudentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentComponent, _super);
    function StudentComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    StudentComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.enrolNo);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        flag = flag && validator.isNotNullObject(form.email);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    StudentComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.collegeId = data.collegeId;
        console.log(form.collegeId + " inside populateForm method");
        form.email = data.email;
        form.enrolNo = data.enrolNo;
        form.dob = data.dob;
        //let ndate = new Date(data.dob);
        //console.log(form.dob + 'date ------',ndate)
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.phoneNo = data.phoneNo;
    };
    StudentComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentComponent);
    return StudentComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/subject/subject-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 1%;padding-bottom: 4%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n       <!--  <div class=\"col-sm-6 p-1\"> -->\n          <div class=\"text-center\">\n          <h4 class=\"text-primary font-weight-bold\">{{'Subject List' | translate}}</h4>\n        </div>\n      <!-- </div> -->\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\" placeholder=\"{{'Search Subject' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\" placeholder=\"{{'Search Course' | translate }}\">\n        </div>\n        \n        \n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate}}</button>\n        </div>\n        <div class=\"col-lg-2\">\n          <button (click)=\"forward('/subject')\" type=\"button\" class=\"btn btn-success\">{{'Add Subject' | translate}}\n          </button>\n        \n      </div>\n      <div class=\"col-sm-1\">\n        <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n          {{'Delete'| translate}}</button>\n      </div>\n      </div>\n      \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate}}</th>\n                <th>{{'Name' | translate}}</th>\n                <th>{{'Course' | translate}}</th>\n               \n                <th>{{'Description' | translate}}</th>\n                <th>{{'Edit' | translate }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.subjectName}} </td>\n                <td> {{ m.courseName}} </td>\n               \n                <td> {{ m.description }} </td>\n                <td>\n                  <a (click)=\"forward( '/subject/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n                \n              </tr>\n              <div class=\"row p-1\">\n                <div class=\"col-lg-10\">\n                    <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate}} </button>\n                </div>\n                <div class=\"col-lg-1\">\n                    <button (click)=\"next()\" [disabled]=\"form.list.length < 5\" class=\"btn btn-info\">{{'Next' | translate}} </button>\n                </div>\n                </div>\n                \n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/subject-list.component.ts ***!
  \***************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var SubjectListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectListComponent, _super);
    function SubjectListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! ./subject-list.component.html */ "./src/app/subject/subject-list.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectListComponent);
    return SubjectListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;background-image: url(../../assets/files/D1.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <div class=\"text-center\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Subject' | translate}}</h2>\n          </div>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Subject' | translate}}</h2>\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            \n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"subjectName\" [(ngModel)]=\"form.data.subjectName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Subject Name' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Description' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                </div>\n                <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"form.data.description\"\n                  placeholder=\"{{'Enter Description' | translate}}\"></textarea>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file-text-o grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/subjectlist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\n              </button></div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var SubjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectComponent, _super);
    function SubjectComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    SubjectComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.subjectName);
        flag = flag && validator.isNotNullObject(form.description);
        flag = flag && validator.isNotNullObject(form.courseId);
        return flag;
    };
    SubjectComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectName = data.subjectName;
        form.description = data.description;
        form.courseId = data.courseId;
        console.log('Populated Form', form);
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectComponent);
    return SubjectComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 1%; padding-bottom: 4%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n    <div class=\"container-fluid\">\n  \n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\" style=\"height: 50px;\">\n          <!-- <div class=\"col-sm-6 p-1\"> -->\n            <div class=\"text-center\">\n            <h1 class=\"text-primary font-weight-bold\">{{'TimeTable List' | translate }}</h1>\n          </div>\n        </div>\n  \n        <div class=\"row p-1\">\n          <div class=\"col-sm-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\" placeholder=\"{{'Search Course' | translate }}\">\n          </div>\n          <div class=\"col-sm-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\" placeholder=\"{{'Search Subject' | translate }}\">\n          </div>\n          \n  \n          <div class=\"col-sm-1\">\n            <button (click)=\"submit()\" class=\"btn btn-primary\">\n              {{'Search' | translate }}</button>\n          </div>\n          <div class=\"col-lg-2\">\n            <button (click)=\"forward('/timetable')\" type=\"button\" class=\"btn btn-success\">{{'Add TimeTable' | translate }}\n            </button>\n          </div>\n       \n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n       \n        <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n          {{form.message}}\n        </div>\n        <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n          {{form.message}}\n        </div>\n  \n        <div class=\"p-1\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-striped table-hover\">\n              <thead class=\"thead-light text-uppercase\">\n                <tr><th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n\n                  <th>{{'S.No.' | translate }}</th>\n                  <th>{{'Semester' | translate }}</th>\n                  <th>{{'ExamDate' | translate }}</th>\n                  <th>{{'ExamTime' | translate }}</th>\n                  <th>{{'Course' | translate }}</th>\n                  <th>{{'Subject' | translate }}</th>\n                  <th>{{'Description' | translate }}</th>\n                  <th>{{'Edit' | translate}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let m of form.list; let i = index\">\n                  <td> <input type=\"checkbox\"  #checkboxes  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                  </td>\n                  <td> {{(form.pageNo*5)+i+ 1}} </td>\n                  <td> {{ m.semester }} </td>\n                  <td> {{ m.examDate  | date : 'dd-MM-yyyy' }} </td>\n                  <td> {{ m.examTime }} </td>\n                  <td> {{ m.courseName }} </td>\n                  <td> {{ m.subjectName }} </td>\n                  <td> {{ m.description }} </td>\n                  <td>\n                    <a (click)=\"forward( '/timetable/' +  m.id)\" style=\"cursor: pointer;\">\n                      <i class=\"fa fa-edit text-info\"></i>\n                    </a>\n                    <!-- /\n                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                      <i class=\"fa fa-trash text-danger\"></i>\n                    </a>\n                  </td> -->\n                  \n                </tr>\n                <div class=\"row p-1\">\n                  <div class=\"col-lg-10\">\n                      <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate }} </button>\n                  </div>\n                  <div class=\"col-lg-1\">\n                      <button (click)=\"next()\" [disabled]=\"form.list.length < 5\" class=\"btn btn-info\"> {{'Next' | translate }} </button>\n                  </div>\n                  </div>\n              </tbody>\n            </table>\n          </div>\n        </div>\n  \n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/timetable/timetable-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TimetableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableListComponent", function() { return TimetableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var TimetableListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableListComponent, _super);
    function TimetableListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    TimetableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable-list',
            template: __webpack_require__(/*! ./timetable-list.component.html */ "./src/app/timetable/timetable-list.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TimetableListComponent);
    return TimetableListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timetable/timetable.component.html":
/*!****************************************************!*\
  !*** ./src/app/timetable/timetable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;background-image: url(../../assets/files/D1.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <div class=\"text-center\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add TimeTable' | translate }}</h2>\n          </div>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update TimeTable' | translate }}</h2>\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Course' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n          \n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-globe grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\" style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Semester' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"semester\" [(ngModel)]=\"form.data.semester\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\"> {{'Please select' | translate}} </option>\n                  <option value=\"1 Semester\">1 Semester</option>\n                  <option value=\"2 Semester\">2 Semester</option>\n                  <option value=\"3 Semester\">3 Semester</option>\n                  <option value=\"4 Semester\">4 Semester</option>\n                  <option value=\"5 Semester\">5 Semester</option>\n                  <option value=\"6 Semester\">6 Semester</option>\n                  <option value=\"7 Semester\">7 Semester</option>\n                  <option value=\"8 Semester\">8 Semester</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.semester}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Exam Date' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"examDate\" [value]=\"form.data.examDate | date:'yyyy-MM-dd'\"\n                (input)=\"form.data.examDate=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.examDate}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Exam Time' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"examTime\" [(ngModel)]=\"form.data.examTime\">\n                  <option selected disabled>{{'Please select' | translate }}</option>\n                  <option value=\"08:00 AM to 11:00 AM\">08:00 AM to 11:00 AM</option>\n                  <option value=\"12:00PM to 3:00PM\">12:00PM to 3:00PM</option>\n                  <option value=\"3:00PM to 6:00PM\">3:00PM to 6:00PM</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.examTime}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span><b>{{'Description' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\n                </div>\n                <textarea  name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\"  (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button  *ngIf=\"form.data.id>0\"  (click)=\"submit()\" class=\"btn btn-success mr-2\">\n              {{'Update' | translate }}</button>\n            </div>\n           \n           \n            <div class=\"pl-3 pt-2\">\n              <button (click)=\"forward('/timetablelist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TimetableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableComponent, _super);
    function TimetableComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    TimetableComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    TimetableComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.semester);
        flag = flag && validator.isNotNullObject(form.examDate);
        console.log(form.examDate);
        flag = flag && validator.isNotNullObject(form.examTime);
        flag = flag && validator.isNotNullObject(form.courseId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    TimetableComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseId = data.courseId;
        form.subjectId = data.subjectId;
        form.semester = data.semester;
        form.examDate = data.examDate;
        form.examTime = data.examTime;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    TimetableComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable',
            template: __webpack_require__(/*! ./timetable.component.html */ "./src/app/timetable/timetable.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TimetableComponent);
    return TimetableComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/changepassword.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/changepassword.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\" row content-wrapper\" style=\"padding-top: 3%; padding-bottom: 5%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;width:auto;\n    height: auto;\" >\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <h2  class=\"text-primary font-weight-bold\">{{'Change Password' | translate }}</h2>\n    \n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Old Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"oldPassword\" [(ngModel)]=\"form.data.oldPassword\" class=\"form-control\"\n                  placeholder=\"{{'Enter Old Password' | translate}}\">\n              </div>\n            </div>\n          </div>\n        <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n        \n        <div style=\"padding-top:3%\">\n            <span><b>{{'New Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock-alt grey-text \"></i> </div>\n                </div>\n                <input type=\"password\" name=\"newPassword\" [(ngModel)]=\"form.data.newPassword\" class=\"form-control\"\n                placeholder=\"{{'Enter New Password' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\n          </div>\n          <div style=\"padding-top:3%\">\n            <span><b>Confirm Password</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock grey-text \"></i> </div>\n                </div>\n                <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"form.data.confirmPassword\" class=\"form-control\"\n                placeholder=\"{{'Confirm Password' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.confirmPassword}}</span>\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button   (click)=\"changePassword()\" class=\"btn btn-success mr-2\">\n               {{'Update' | translate}} </button>\n            </div>\n            <input type=\"hidden\" name=\"loginId\" [(ngModel)]=\"form.data.confirmPassword\">\n            \n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/changepassword.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/changepassword.component.ts ***!
  \**************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var ChangepasswordComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangepasswordComponent, _super);
    function ChangepasswordComponent(locator, route, httpService) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpService = httpService;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    ChangepasswordComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.oldPassword);
        flag = flag && validator.isNotNullObject(form.newPassword);
        flag = flag && validator.isNotNullObject(form.confirmPassword);
        return flag;
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        var _self = this;
        this.form.data.loginId = localStorage.getItem("loginId");
        this.httpService.post("http://localhost:8080/User/changepassword", this.form.data, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.form.message = res.result.message;
            }
        });
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/user/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/myprofile.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/myprofile.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form name=\"myProfile\">\n          <h2 class=\"text-primary font-weight-bold\">{{'My Profile'  | translate }}</h2>\n         \n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          \n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'First Name'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Last Name'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'login Id'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Password'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.password}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Mobile'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Alternate Mobile'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'DOB'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\n          </div>\n          \n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Gender'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select'  | translate }}</option>\n                  <option value=\"Male\">{{'Male'  | translate }} </option>\n                  <option value=\"Female\">{{'Female'  | translate }} </option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Image'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"file\" id=\"customFile\" name=\"imageId\"\n                  (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\">\n\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\" readonly>\n\n                  <option value=\"Active\">{{'Active'  | translate }} </option>\n                  <option value=\"Inactive\">{{'Inactive'  | translate }} </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            \n\n            <div class=\"pt-2\">\n              <button (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            \n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/myprofile.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/myprofile.component.ts ***!
  \*********************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MyprofileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyprofileComponent, _super);
    function MyprofileComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    MyprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/user/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MyprofileComponent);
    return MyprofileComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/user-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/user-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .module-border-wrap {\n  /* position: relative; */\n  background: linear-gradient(to right, red, purple);\n  padding: 3px;\n}\n\n.module {\n  background: white;\n  /* color: white; */\n\n}\n</style>\n\n<div class=\"content-wrapper\" style=\"padding-top: 1%; padding-bottom:4%; background-image: url(../../assets/files/avatar-2191918__480gg.webp); background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <!-- <div class=\"col-sm-5\"> -->\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'User List' | translate }}</h1>\n        </div>\n      </div>\n      <!-- <button class=\"filebtn third\">Button 3</button> -->\n      <div class=\"row p-1 input-fields\">\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.firstName\"\n            placeholder=\"{{'Search First Name' | translate}}\">\n\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-4\">\n\n          <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-4\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\"\n            placeholder=\"{{'Search Status' | translate}}\">\n        </div>\n\n        <!-- <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/user')\" type=\"button\" class=\"btn btn-success\">{{'Add User' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div> -->\n\n</div>\n        <div class=\"row\">\n       <span class=\"\" style=\"align-self: center;\">\n            <span>\n              <button (click)=\"submit()\" class=\"btn btn-primary searchBtn\">\n                {{'Search' | translate }}\n              </button>\n            </span>\n            <span>\n              <button (click)=\"forward('/user')\" type=\"button\" class=\"btn btn-success addBtn\">\n                {{'Add User' | translate}}\n              </button>\n            </span>\n            <span>\n              <button (click)=\"deleteMany()\" class=\"btn btn-danger deleteBtn\">\n                {{'Delete'| translate}}\n              </button>\n            </span>\n          </span>\n          \n        </div>\n      \n\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive module-border-wrap\">\n\n          <table class=\"table table-bordered table-striped table-hover  module \">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No' | translate}}</th>\n                <th>{{'Image' | translate}}</th>\n                <th>{{'First Name' | translate}}</th>\n                <th>{{'Last Name' | translate}}</th>\n                <th>{{'Login' | translate}}</th>\n                <th>{{'Status' | translate}}</th>\n                <th>{{'Role' | translate}}</th>\n                <th>{{'Phone' | translate}}</th>\n                <th>{{'DOB' | translate}}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\" #checkboxes name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td>\n                  <div *ngIf=\"m.imageId\">\n                    <img src=\"http://localhost:8080/User/profilePic/{{m.id}}\" height=\"55px\" width=\"80px\">\n                  </div>\n                  <div *ngIf=\"!m.imageId\">\n                    <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\n                  </div>\n                </td>\n\n                <td> {{ m.firstName }} </td>\n                <td> {{ m.lastName }} </td>\n                <td> {{ m.loginId }} </td>\n                <td> {{ m.status }} </td>\n                <td> {{ m.roleName }} </td>\n                <td> {{ m.phone }} </td>\n                <td> {{ m.dob | date : 'dd-MM-yyyy'}} </td>\n                <td>\n                  <a (click)=\"forward( '/user/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-primary\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger \"></i>\n                  </a> -->\n\n                </td>\n              </tr>\n\n\n            </tbody>\n\n          </table>\n\n          <!-- <div class=\"row p-1\"> -->\n            <!-- <div>\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate }} </button>\n            </div>\n            <div class=\"row p-1\" >\n              <div class=\"col-lg-2\"> -->\n\n            <!-- <a class=\"btn btn-warning mr-1\" href=\"/userlist\">{{'Back' | translate}}</a>\n              </div> \n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\n\n            <!-- <div>\n              <button (click)=\"next()\" [disabled]=\"form.list.length5\" type=\"button\" class=\"btn btn-info\"> {{'Next' | translate }}</button>\n            </div> \n            </div>\n           -->\n\n            <div class=\"button-group\">\n              <div>\n                <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info previous\"> {{'Previous' |\n                  translate }}\n                </button>\n              </div>\n              <div>\n                <button (click)=\"next()\" [disabled]=\"form.list.length5\" type=\"button\" class=\"btn btn-info next\">\n                  {{'Next' | translate }}\n                </button>\n              </div>\n            </div>\n          <!-- </div> -->\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserListComponent, _super);
    function UserListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    UserListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    UserListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8080/User/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserListComponent);
    return UserListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n  color: red;\n}\n\n\n.required-field::after {\n  content: \"*\";\n  color: red;\n}\n\n\n.successColor {\n  color: green;\n}\n\n\n.btn-space {\n  margin-right: 5px;\n}\n\n\n.file-btn {\n  border: black;\n}\n\n\n.third {\n  border-color: #b300b3;\n  color: #695d29;\n  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;\n  transition: all 150ms ease-in-out;\n}\n\n\n.third:hover {\n  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;\n}\n\n\n.filebtn {\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  border: 2px solid #e74c3c;\n  border-radius: 0.6em;\n  color: #e74c3c;\n  cursor: pointer;\n  display: flex;\n  align-self: center;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1;\n  margin: 20px;\n  padding: 1.2em 2.8em;\n  text-decoration: none;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n}\n\n\n.filebtn:hover,\n.filebtn:focus {\n  color: #ffffff;\n  outline: 0;\n}\n\n\n/* user-list css */\n\n\n.button-group {\n  display: flex;\n  margin: 0 0 0 45%;\n}\n\n\n.previous {\n  margin: 0 0 20px 0;\n}\n\n\n.next {\n  margin: 0 0 10px 20px;\n}\n\n\n.buttons-header-group {\n  display: flex;\n}\n\n\n.addBtn {\n  margin: 0 10px 0 10px;\n}\n\n\n.forms-image-input {\n  display: flex;\n  margin: 20px 0 0 14px;\n}\n\n\n.addUserBtnGrp {\n  display: flex;\n  margin: auto;\n\n}\n\n\n.input-fields {\n  margin-left: 10%;\n}\n\n\n@media only screen and (max-width: 800px) {\n  .btn-grp {\n    margin: auto;\n  }\n\n\n  .buttons-header-group {\n    margin: 15px;\n  }\n\n  .input-fields {\n    margin: 0;\n  }\n}\n\n\n@media only screen and (min-width: 570px) {\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHdEQUF3RDtFQUV4RCxpQ0FBaUM7QUFDbkM7OztBQUVBO0VBQ0UsMERBQTBEO0FBQzVEOzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZUFBZTtFQUlmLGFBQWE7RUFHYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOzs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOzs7QUFFQSxrQkFBa0I7OztBQUVsQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7OztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOzs7RUFHQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNGOzs7QUFFQTs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdWNjZXNzQ29sb3Ige1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5idG4tc3BhY2Uge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmZpbGUtYnRuIHtcbiAgYm9yZGVyOiBibGFjaztcbn1cblxuLnRoaXJkIHtcbiAgYm9yZGVyLWNvbG9yOiAjYjMwMGIzO1xuICBjb2xvcjogIzY5NWQyOTtcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjMzQ5OGRiIGluc2V0LCAwIDAgMCAwICMzNDk4ZGI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50aGlyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgIzM0OThkYiBpbnNldCwgMCAwIDEwcHggNHB4ICMzNDk4ZGI7XG59XG5cbi5maWxlYnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTc0YzNjO1xuICBib3JkZXItcmFkaXVzOiAwLjZlbTtcbiAgY29sb3I6ICNlNzRjM2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xuICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAxLjJlbSAyLjhlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5maWxlYnRuOmhvdmVyLFxuLmZpbGVidG46Zm9jdXMge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3V0bGluZTogMDtcbn1cblxuLyogdXNlci1saXN0IGNzcyAqL1xuXG4uYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMCA0NSU7XG59XG5cbi5wcmV2aW91cyB7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbn1cblxuLm5leHQge1xuICBtYXJnaW46IDAgMCAxMHB4IDIwcHg7XG59XG5cbi5idXR0b25zLWhlYWRlci1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZGRCdG4ge1xuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG59XG5cbi5mb3Jtcy1pbWFnZS1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjBweCAwIDAgMTRweDtcbn1cblxuLmFkZFVzZXJCdG5HcnAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG5cbn1cblxuLmlucHV0LWZpZWxkcyB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYnRuLWdycCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cblxuICAuYnV0dG9ucy1oZWFkZXItZ3JvdXAge1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxuXG4gIC5pbnB1dC1maWVsZHMge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3MHB4KSB7XG5cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;background-image: url(../../assets/files/D1.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:101.5%;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <!-- <div class=\"col-sm-4\"></div> -->\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form name=\"userForm\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add User'  | translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\"  style=\"text-align: center;\">{{'Update User'  | translate }}</h2>\n\n          \n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Role Name'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n\n\n                <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.data.roleId\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span  *ngIf=\"form.inputerror.roleId != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'role'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.roleId}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'First Name'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.firstName != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'firstname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Last Name'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.lastName != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'lastname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'login Id'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.loginId != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'email'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.loginId}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Password'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password'  | translate }}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.password != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.password}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Mobile'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.phone != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'phone'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Alternate Mobile'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.alternateMobile != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'mobile'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.alternateMobile}} </span> -->\n          </div>\n\n          <div >\n            <span class=\"pt-2\"><b>{{'DOB'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n            </div><span  *ngIf=\"form.inputerror.dob != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'dob'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span> -->\n          </div>\n          \n          <div>\n            <span class=\"pt-2\"><b>{{'Gender'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select'  | translate }}</option>\n                  <option value=\"Male\">{{'Male'  | translate }} </option>\n                  <option value=\"Female\">{{'Female'  | translate }} </option>\n                </select>\n              </div>\n            </div><span  *ngIf=\"form.inputerror.gender != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'gender'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.gender}} </span> -->\n          </div>\n\n          <!-- <div>\n            <span class=\"pt-2\"><b>{{'Image' | translate }}</b>  -->\n              <!-- <option [ngValue]=\"\" value=\"undefined\"></option> -->\n            <!--   <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-picture-o grey-text\"></i> </div>\n                </div>\n                <input type=\"file\" id=\"customFile\" name=\"imageId\"\n                  (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\">\n\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\n              </div>\n            </div>\n          </div> -->\n\n          <div class=\"forms-image-input\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-picture-o grey-text\"></i></div>\n              </div>\n              <div>\n                <input type=\"file\" id=\"customFile\" name=\"imageId\" (change)=\"onFileSelect($event.target.files)\"\n                  accept=\"image/*\">\n\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\n              </div>\n            </div>\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bell grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Status' | translate }}</option>\n                  <option value=\"Active\">{{'Active'  | translate }} </option>\n                  <option value=\"Inactive\">{{'Inactive'  | translate }} </option>\n                </select>\n              </div>\n            </div><span  *ngIf=\"form.inputerror.status != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'status'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.status}} </span> -->\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            \n            <div class=\"col-md-3\"></div>\n\n\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" \n                class=\"btn btn-success mr-2\">\n                {{'Save'  | translate }}</button>\n            </div>\n            \n            \n\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/userlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button></div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserComponent, _super);
    function UserComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.userForm = null;
        return _this;
    }
    UserComponent.prototype.submit = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            _self.myFile();
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            _self.myFile();
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    UserComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    UserComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.onSubmitProfile = function (fileToUpload, userform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.form.data.id, formData);
    };
    UserComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.roleId);
        console.log(form.roleId);
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        console.log(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        console.log(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        console.log(form.phone);
        flag = flag && validator.isNotNullObject(form.alternateMobile);
        console.log(form.alternateMobile);
        flag = flag && validator.isNotNullObject(form.dob);
        console.log(form.dob);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender + 'gender--');
        flag = flag && validator.isNotNullObject(form.status);
        console.log(form.status + 'status---');
        return flag;
    };
    UserComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in usercomponent');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.loginId = data.loginId;
        form.password = data.password;
        form.gender = data.gender;
        console.log(form.gender + 'gender--');
        form.alternateMobile = data.alternateMobile;
        form.phone = data.phone;
        console.log(form.phone);
        form.dob = data.dob;
        form.roleId = data.roleId;
        form.status = data.status;
        console.log(form.status + 'status---');
    };
    UserComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    UserComponent.prototype.test = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/utility/data-validator.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/data-validator.ts ***!
  \*******************************************/
/*! exports provided: DataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidator", function() { return DataValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataValidator = /** @class */ (function () {
    function DataValidator() {
    }
    DataValidator.prototype.trim = function (valueToWhite) {
        return valueToWhite.replace(/\s/g, "");
    };
    /**
     * Check is string is not empty
     * @param val
     */
    DataValidator.prototype.isNotNull = function (val) {
        var flag = true;
        try {
            if (val) {
                val = this.trim(val);
                flag = val.length > 0;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
   * Is string is empty
   * @param val
   */
    DataValidator.prototype.isNull = function (val) {
        return !this.isNotNullObject(val);
    };
    /**
     * Is not null object
     */
    DataValidator.prototype.isNotNullObject = function (val) {
        var flag = true;
        try {
            if (val) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
     * Is null object
     */
    DataValidator.prototype.isNullObject = function (val) {
        return !this.isNotNullObject(val);
    };
    DataValidator.prototype.isTrue = function (val) {
        var flag = true;
        if (val) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    /**
     *
     * @param val Convets string into number
     */
    DataValidator.prototype.toInt = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseInt(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    DataValidator.prototype.toFloat = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseFloat(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    /**
     * Create clone pobject
     *
     * @param obj
     */
    DataValidator.prototype.getClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    DataValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataValidator);
    return DataValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\P10\Project-10\ORSProject10-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map