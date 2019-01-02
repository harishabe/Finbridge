import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';
import { NavBarComponent } from './../navBar/navBar';
import { SignupComponent } from './signup.component';

const routes: Routes = [
    {
        path: '', component: SignupComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [SignupComponent],
    providers: [Icons, Message]
})
export class SignupModule { }
