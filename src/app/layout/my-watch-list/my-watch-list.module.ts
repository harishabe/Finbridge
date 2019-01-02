import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { MyWatchListComponent } from './my-watch-list.component';

const routes: Routes = [
    {
        path: '',
        component: MyWatchListComponent
    }
];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [MyWatchListComponent],
    providers: [Icons, Message]
})
export class MywatchModule { }
