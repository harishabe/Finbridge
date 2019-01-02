import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { RetirementPlanInvestComponent } from './retirement-plan-invest.component';

const routes: Routes = [
    {
        path: '',
        component: RetirementPlanInvestComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [RetirementPlanInvestComponent],
    providers: [Icons, Message]
})
export class RetirementPlanInvestModule { }
