import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material';

import { Icons } from './../config/icon.config';
import { Message } from '../config/message.en';
import { LandingPageComponent } from './../landing-page/landing-page.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule,RouterModule.forChild(routes)],
    declarations: [LandingPageComponent],
    providers:[Icons,Message]
})
export class LandingPageModule { }
