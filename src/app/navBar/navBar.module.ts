import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';

import { NavBarComponent } from './navBar';


@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [NavBarComponent],
    providers: [Icons, Message]
})
export class NavBarModule { }
