import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';

import { LoginComponent } from './login.component';
import { NavBarComponent } from './../navBar/navBar';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [LoginComponent],
    providers: [Icons, Message]
})
export class LoginModule { }
