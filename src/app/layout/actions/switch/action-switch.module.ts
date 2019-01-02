import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { ActionSwitchComponent } from './action-switch.component';

const routes: Routes = [
    {
        path: '',
        component: ActionSwitchComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [ActionSwitchComponent],
    providers: [Icons, Message]
})
export class ActionSwitchModule { }
