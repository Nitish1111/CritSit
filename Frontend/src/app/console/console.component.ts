import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  data : CritInterface[];
  headerRow : String[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.headerRow = ['Impacted Services','Description','Involved Teams', 'Reported By', 'Status'];
    const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS','Access-Control-Allow-Headers': "Origin, Content-Type, X-Auth-Token"}
    console.log(this.data);
    this.http.get<any>('http://localhost:3000/critEvents/getCritEventsList',  {headers}).subscribe(res => {
            this.data = res;
            debugger;
            console.log(this.data);
        })
  }

}



export interface CritInterface {
  impactedServices: String;
  description: String;
  teamsInvolved: String;
  reportedBy: String;
  status : String
}
