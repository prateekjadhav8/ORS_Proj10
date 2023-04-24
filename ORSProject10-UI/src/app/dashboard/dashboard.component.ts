import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   /*  console.log("CONSOLE TO CHECKTOKEN", localStorage.getItem('token'));
    window.onpopstate = (e) => { window.history.forward(); } */
  }



}
