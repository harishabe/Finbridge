import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { userDetailsComponent } from './userDetails.component';

const routes: Routes = [
    {
        path: '',
        component: userDetailsComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [userDetailsComponent],
    providers: [Icons, Message]
})
export class UserDetailsModule { }
