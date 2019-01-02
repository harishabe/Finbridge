import { Component, OnInit } from '@angular/core';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showProgressBar = false;
  wmsLoginObj = { "username": '', "password": '' };
  showDashboardMenu;
  constructor(private icon: Icons, private MESSAGE: Message, private router: Router) { }

  ngOnInit() {
  }

  /**
   * @name login
   * @desc login function
  */
  login() {
    this.showDashboardMenu = true;
    localStorage.setItem('showMenu', this.showDashboardMenu);
    this.router.navigate(['/dashboard/userInfo']);
  }

}
