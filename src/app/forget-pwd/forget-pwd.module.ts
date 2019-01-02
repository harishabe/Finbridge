import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';

import { ForgetPwdComponent } from './forget-pwd.component';

const routes: Routes = [
    {
        path: '',
        component: ForgetPwdComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [ForgetPwdComponent],
    providers:[Icons,Message]
})
export class ForgetPwdModule { }
