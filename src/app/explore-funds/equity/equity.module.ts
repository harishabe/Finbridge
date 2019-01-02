import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';
import { EquityComponent } from './equity.component';

const routes: Routes = [
    {
        path: '', component: EquityComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [EquityComponent],
    providers: [Icons, Message]
})
export class EquityModule { }
