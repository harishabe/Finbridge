import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { RetirementPlanComponent } from './retirement-plan.component';

const routes: Routes = [
    {
        path: '',
        component: RetirementPlanComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [RetirementPlanComponent],
    providers: [Icons, Message]
})
export class RetirementPlanModule { }
