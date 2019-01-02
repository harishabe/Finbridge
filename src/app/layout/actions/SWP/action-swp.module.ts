import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { ActionSWPComponent } from './action-swp.component';

const routes: Routes = [
    {
        path: '',
        component: ActionSWPComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [ActionSWPComponent],
    providers: [Icons, Message]
})
export class ActionSwpModule { }
