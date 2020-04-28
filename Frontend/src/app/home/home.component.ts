import { Component, OnInit } from '@angular/core';
//import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
//import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
//import * as Chartist from 'chartist';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  data: CritInterface;
  postId: String;
  teams:TeamInterface[];

  constructor(private http: HttpClient) {


  }

  ngOnInit() {
    this.data = {
      impactedServices: '',
      description: '',
      teamsInvolved: '',
      reportedBy: '',
      status: 'New'
    };
    
    const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers': "Origin, Content-Type, X-Auth-Token" };
    //console.log(this.data);
    this.http.get<any>('http://localhost:3000/teams/getTeamsList', { headers }).subscribe(res => {
      this.teams = res;
      //debugger;
      console.log(this.teams);
    })


  }

  submit() {
    const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers': "Origin, Content-Type, X-Auth-Token" }
    console.log(this.data);
    this.http.post<any>('http://localhost:3000/critEvents/createCritEvent', this.data, { headers }).subscribe(
      res => {
        if (res)
          alert("New Crit Sit Event Created Successfully");
      },
      error => {
        alert('Something went wrong.Try again later');
        console.log(error)
      })
  }

}



export interface CritInterface {
  impactedServices: String,
  description: String,
  teamsInvolved: String,
  reportedBy: String,
  status: String
}

export interface TeamInterface {
  teamName: String,
  teamID: String,
  teamEmail: String,
}
