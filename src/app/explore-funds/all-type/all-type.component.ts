import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-type',
  templateUrl: './all-type.component.html',
  styleUrls: ['./all-type.component.scss']
})
export class AllTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SIPStartingJSON = [{
    "amount":"500"
  },{
    "amount":"1000"
  },{
    "amount":"1500"
  },{
    "amount":"2000"
  }];

  RiskJSON = [{
    "risk":"Low"
  },{
    "risk":"Moderately Low"
  },{
    "risk":"Moderate"
  },{
    "risk":"Moderately High"
  },{
    "risk":"High"
  }];

  SortByJSON = [{
    "sort":"Returns"
  },{
    "sort":"Popularity"
  },{
    "sort":"Ratings"
  }];

  EquityJSON = [{
    "equity":"ELSS"
  },{
    "equity":"Large cap"
  },{
    "equity":"Mid cap"
  },{
    "equity":"Small cap"
  },{
    "equity":"Multi cap"
  },{
    "equity":"Sectoral"
  }];

  CardJSON = [{
    "fundName":"ICIC Pru LT Equity Fund(Tax Saving) (G)- Regular",
    "equity":"Equity LESS",
    "rate":"10.48%",
    "yearReturn":"1yr returns",
    "sip":"SIP start from",
    "amount":"Rs.1000",
    "img":"./../../../assets/img/Bitmap4.png"
  },{
    "fundName":"SBI Focused Equity Fund (G) - Regular",
    "equity":"Equity Multi Cap",
    "rate":"15.48%",
    "yearReturn":"1yr returns",
    "sip":"SIP start from",
    "amount":"Rs.500",
    "img":"./../../../assets/img/Bitmap4.png"
  },{
    "fundName":"Aditya Birla SL Focused Equity Fund (G) - Regular",
    "equity":"Equity Large Cap",
    "rate":"7.72%",
    "yearReturn":"1yr returns",
    "sip":"SIP start from",
    "amount":"Rs.2000",
    "img":"./../../../assets/img/Bitmap4.png"
  },{
    "fundName":"ICIC Pru LT Equity Fund(Tax Saving) (G)- Regular",
    "equity":"Equity LESS",
    "rate":"10.48%",
    "yearReturn":"1yr returns",
    "sip":"SIP start from",
    "amount":"Rs.1000",
    "img":"./../../../assets/img/Bitmap4.png"
  },{
    "fundName":"SBI Focused Equity Fund (G) - Regular",
    "equity":"Equity Multi Cap",
    "rate":"15.48%",
    "yearReturn":"1yr returns",
    "sip":"SIP start from",
    "amount":"Rs.500",
    "img":"./../../../assets/img/Bitmap4.png"
  },{
    "fundName":"Aditya Birla SL Focused Equity Fund (G) - Regular",
    "equity":"Equity Large Cap",
    "rate":"7.72%",
    "yearReturn":"1yr returns",
    "sip":"SIP start from",
    "amount":"Rs.2000",
    "img":"./../../../assets/img/Bitmap4.png"
  }];

}
