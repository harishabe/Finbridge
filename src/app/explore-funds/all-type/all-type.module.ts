import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

// import { NavBarComponent } from './../../navBar/navBar';
import { AllTypeComponent } from './all-type.component';

const routes: Routes = [
    {
        path: '', component: AllTypeComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [AllTypeComponent],
    providers: [Icons, Message]
})
export class AllTypeModule { }
