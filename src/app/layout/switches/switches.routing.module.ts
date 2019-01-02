import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwitchesComponent } from './switches.component';

const routes: Routes = [
    {
        path: '',
        component: SwitchesComponent,
        children: [
            { path: '', redirectTo: 'switch', pathMatch: 'prefix' },
            { path: 'stp', loadChildren: './STP/stp.module#StpModule' },
            { path: 'switch', loadChildren: './switch/switch.module#SwitchModule' },
            { path: 'swp', loadChildren: './SWP/swp.module#SwpModule' }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SwitchesRoutingModule { }
