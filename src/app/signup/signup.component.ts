import { Component, OnInit } from '@angular/core';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private Icons: Icons, private MESSAGE: Message) { }

  ngOnInit() {
  }

}
