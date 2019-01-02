import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { SwitchComponent } from './switch.component';

const routes: Routes = [
    {
        path: '',
        component: SwitchComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [SwitchComponent],
    providers: [Icons, Message]
})
export class SwitchModule { }
