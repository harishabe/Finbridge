import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { AddExistingComponent } from './add-existing.component';

const routes: Routes = [
    {
        path: '',
        component: AddExistingComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [AddExistingComponent],
    providers: [Icons, Message]
})
export class AddexistingModule { }
