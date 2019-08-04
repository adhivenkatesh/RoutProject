import { Component, OnInit } from '@angular/core';

import {Employee} from 'shared/employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
