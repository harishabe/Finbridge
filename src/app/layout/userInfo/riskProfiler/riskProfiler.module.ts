import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material';
import { Icons } from './../../../config/icon.config';
import { Message } from './../../../config/message.en';

import { riskProfilerComponent } from './riskProfiler.component';

const routes: Routes = [
    {
        path: '',
        component: riskProfilerComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [riskProfilerComponent],
    providers: [Icons, Message]
})
export class RiskProfilerModule { }
