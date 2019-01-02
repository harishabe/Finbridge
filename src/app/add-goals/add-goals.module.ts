import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material';

import { AddGolasRoutingModule } from './add-goals.routing.module';
import { AddGoalsComponent } from './add-goals.component';

import { Icons } from './../config/icon.config';


@NgModule({
    imports: [CommonModule, MaterialModule, AddGolasRoutingModule],
    declarations: [AddGoalsComponent],
    providers:[Icons]
})
export class AddGoalsModule { }
