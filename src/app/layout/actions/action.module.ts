import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

import { ActionComponent } from './action.component';
import { ActionRoutingModule } from './action.routing.module';

@NgModule({
    imports: [CommonModule, MaterialModule,ActionRoutingModule],
    declarations: [ActionComponent],
    providers: [Icons, Message]
})
export class ActionModule { }
