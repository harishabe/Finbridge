import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material';

import { userInfoComponent } from './userInfo.component';
import { DashboardNavBarComponent } from './../dashboardNavBar/primary-nav-bar/dashboardNavBar';

import { userInfoRoutingModule } from './userInfo.routing.module'

import { Icons } from './../../config/icon.config';


@NgModule({
    imports: [CommonModule, MaterialModule, userInfoRoutingModule],
    declarations: [userInfoComponent],
    providers:[Icons]
})
export class userInfoModule { }
