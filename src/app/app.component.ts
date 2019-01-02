import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu = true;
  showNavBar = true;
  constructor(private router: Router) {
    this.showNavBar = true;
    this.showMenu = JSON.parse(localStorage.getItem('showMenu'));
    console.log('this.showMenu',this.showMenu);
  }

  login(){
    this.showNavBar = false;
    this.router.navigate(['/login']);
  }
}
