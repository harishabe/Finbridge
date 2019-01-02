import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { RetirementPlanDetailComponent } from './retirement-plan-details.component';

const routes: Routes = [
    {
        path: '',
        component: RetirementPlanDetailComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [RetirementPlanDetailComponent],
    providers: [Icons, Message]
})
export class RetirementPlanDetailModule { }
