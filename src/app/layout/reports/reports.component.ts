import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  //displayedColumns = ['clId_RRNo', 'Date', 'pressureValue', 'flowValue','magValue','functions','valveId','reqStatusStr','directionString','pulse','deg','turns'];
  displayedColumns = ['clId_RRNo', 'Date', 'pressureValue', 'flowValue'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  clId_RRNo: any;
  Date: any;
  pressureValue: any;
  flowValue: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "clId_RRNo": "Dainel",
    "Date": "$90",
    "pressureValue": "Invoice",
    "flowValue": "500"
  },
  {
    "clId_RRNo": "John",
    "Date": "$100",
    "pressureValue": "Invoice",
    "flowValue": "100"
  },
  {
    "clId_RRNo": "Dean",
    "Date": "$190",
    "pressureValue": "Invoice",
    "flowValue": "600"
  },
  {
    "clId_RRNo": "Dainel Grayson",
    "Date": "$290",
    "pressureValue": "Invoice",
    "flowValue": "50"
  },
  {
    "clId_RRNo": "Dainel",
    "Date": "$90",
    "pressureValue": "Invoice",
    "flowValue": "500"
  },
  {
    "clId_RRNo": "John",
    "Date": "$100",
    "pressureValue": "Invoice",
    "flowValue": "100"
  },
  {
    "clId_RRNo": "Dean",
    "Date": "$190",
    "pressureValue": "Invoice",
    "flowValue": "600"
  },
  {
    "clId_RRNo": "Dainel Grayson",
    "Date": "$290",
    "pressureValue": "Invoice",
    "flowValue": "50"
  },
  {
    "clId_RRNo": "Dean",
    "Date": "$190",
    "pressureValue": "Invoice",
    "flowValue": "600"
  },
];


