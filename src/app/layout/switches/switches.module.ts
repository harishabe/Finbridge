import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material';

import { SwitchesRoutingModule } from './switches.routing.module';
import { SwitchesComponent } from './switches.component';

import { Icons } from './../../config/icon.config';


@NgModule({
    imports: [CommonModule, MaterialModule, SwitchesRoutingModule],
    declarations: [SwitchesComponent],
    providers:[Icons]
})
export class SwitchesModule { }
