import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { LayoutRoutingModule } from './layout.routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutComponent } from './layout.component';
import { DashboardNavBarComponent } from './dashboardNavBar/primary-nav-bar/dashboardNavBar';
import { Icons } from './../config/icon.config';


@NgModule({
    imports: [CommonModule, MaterialModule, LayoutRoutingModule],
    declarations: [NavBarComponent,DashboardNavBarComponent, LayoutComponent],
    providers: [Icons]
})
export class LayoutModule { }
