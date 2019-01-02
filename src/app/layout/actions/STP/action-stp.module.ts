import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { ActionSTPComponent } from './action-stp.component';

const routes: Routes = [
    {
        path: '',
        component: ActionSTPComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [ActionSTPComponent],
    providers: [Icons, Message]
})
export class ActionSTPModule { }
