import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { CancelSIPComponent } from './cancel-sip.component';

const routes: Routes = [
    {
        path: '',
        component: CancelSIPComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [CancelSIPComponent],
    providers: [Icons, Message]
})
export class CancelSIPModule { }
