import { Component, OnInit } from '@angular/core';
import {SearchPipe} from '../search.pipe'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchPipe = new SearchPipe();
  //fiteredArr = this.searchPipe.transform(searchStr);


  constructor() { }

  ngOnInit() {
  }

}
