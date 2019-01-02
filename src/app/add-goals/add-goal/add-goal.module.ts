import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { AddGoalComponent } from './add-goal.component'

const routes: Routes = [
    {
        path: '',
        component: AddGoalComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [AddGoalComponent],
    providers: [Icons, Message]
})
export class AddGoalModule { }
