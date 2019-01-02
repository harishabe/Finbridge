import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-watch-list',
  templateUrl: './my-watch-list.component.html',
  styleUrls: ['./my-watch-list.component.scss']
})
export class MyWatchListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  CardJSON = [{
    "fundName":"ICIC Pru LT Equity Fund(Tax Saving) (G)- Regular",
    "equity":"Equity LESS",
    "rate":"10.48%",
    "yearReturn":"1yr returns",
    "sip":"SIP start from",
    "amount":"Rs.1000",
    "img":"./../../../assets/img/Bitmap4.png",
    "date":"12 June 2018",
    "invest1":"Rs.1000 invested would have become",
    "invest2":"Rs.1200 since you started following"
  },{
    "fundName":"SBI Focused Equity Fund (G) - Regular",
    "equity":"Equity Multi Cap",
    "rate":"15.48%",
    "yearReturn":"1yr returns",
    "sip":"SIP start from",
    "amount":"Rs.500",
    "img":"./../../../assets/img/Bitmap4.png",
    "date":"12 June 2018",
    "invest1":"Rs.1000 invested would have become",
    "invest2":"Rs.1200 since you started following"
  },{
    "fundName":"Aditya Birla SL Focused Equity Fund (G) - Regular",
    "equity":"Equity Large Cap",
    "rate":"7.72%",
    "yearReturn":"1yr returns",
    "sip":"SIP start from",
    "amount":"Rs.2000",
    "img":"./../../../assets/img/Bitmap4.png",
    "date":"12 June 2018",
    "invest1":"Rs.1000 invested would have become",
    "invest2":"Rs.1200 since you started following"
  }];


}
