import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { StatementsComponent } from './statements.component';

const routes: Routes = [
    {
        path: '',
        component: StatementsComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [StatementsComponent],
    providers: [Icons, Message]
})
export class StatementsModule { }
