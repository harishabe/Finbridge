import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { panCardDetailsComponent } from './panCardDetails.component';

const routes: Routes = [
    {
        path: '',
        component: panCardDetailsComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [panCardDetailsComponent],
    providers: [Icons, Message]
})
export class PanDetailsModule { }
