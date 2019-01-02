import { Component, OnInit } from '@angular/core';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.scss']
})
export class ForgetPwdComponent implements OnInit {

  constructor(public icon:Icons,private MESSAGE:Message) { }

  ngOnInit() {
  }

}
