import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { InvestMoreComponent } from './invest-more.component';

const routes: Routes = [
    {
        path: '',
        component: InvestMoreComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [InvestMoreComponent],
    providers: [Icons, Message]
})
export class InvestMoreModule { }
