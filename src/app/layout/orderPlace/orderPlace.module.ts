import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material';
import { Routes, RouterModule } from '@angular/router';
import { OrderPlaceComponent } from './orderPlace.component';

const routes: Routes = [
    {
        path: '',
        component: OrderPlaceComponent
    }
];

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [OrderPlaceComponent],
    exports: [RouterModule]
})
export class OrderPlaceModule { }
