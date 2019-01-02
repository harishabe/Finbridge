import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { BankDetailsComponent } from './bankDetails.component';

const routes: Routes = [
    {
        path: '',
        component: BankDetailsComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [BankDetailsComponent],
    providers: [Icons, Message]
})
export class BankDetailsModule { }
