import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Icons } from './../../config/icon.config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  /*** variable init ***/
  themeClass = '';
  message = [
    {
      'msg': 'Next Update for angular 5',
      'icon':'../../../assets/img/1.jpg',
    },
    {
      'msg': 'Next Update for angular 5',
      'icon':'../../../assets/img/1.jpg',
    },
    {
      'msg': 'Next Update for angular 5',
      'icon':'../../../assets/img/1.jpg',
    },
    {
      'msg': 'Next Update for angular 5',
      'icon':'../../../assets/img/1.jpg',
    }
  ]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private icon: Icons) { }

  /**
    * @name changeTheme
    * @desc change the theme
    * @param {String} theme Message to log
    * @returns {String}
   */

  changeTheme(theme) {
    this.themeClass = theme;
  }



}
