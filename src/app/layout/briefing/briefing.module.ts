import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { BriefingComponent } from './briefing.component';

const routes: Routes = [
    {
        path: '',
        component: BriefingComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [BriefingComponent],
    providers: [Icons, Message]
})
export class BriefingModule { }
