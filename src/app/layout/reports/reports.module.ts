import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';

import { ReportsComponent } from './reports.component';

const routes: Routes = [
    {
        path: '',
        component: ReportsComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [ReportsComponent]
})
export class ReportsModule { }
