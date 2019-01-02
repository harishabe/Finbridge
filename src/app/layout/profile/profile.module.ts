import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    }
];

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [ProfileComponent],
    exports: [RouterModule]
})
export class ProfileModule { }
