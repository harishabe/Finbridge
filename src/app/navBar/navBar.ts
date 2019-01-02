import { Component, OnInit } from '@angular/core';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';
import { Router } from '@angular/router';
@Component({
    selector: 'app-nav-bar',
    templateUrl: './navBar.html',
    styleUrls: ['./navBar.scss']
})
export class NavBarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
