import { Component, OnInit } from '@angular/core';
import { Icons } from '../config/icon.config';
import { Message } from '../config/message.en';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public title:Message,public icon:Icons) { }

  ngOnInit() {
  }

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
  }];


}
