import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { StockMoreDetailComponent } from './stockMoreDetail.component';

const routes: Routes = [
    {
        path: '', component: StockMoreDetailComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [StockMoreDetailComponent],
    providers: [Icons, Message]
})
export class StockMoreDetailModule { }
