import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionComponent } from './action.component';

const routes: Routes = [
    {
        path: '',
        component: ActionComponent,
        children: [
            //{ path: '', redirectTo: '', pathMatch: 'prefix' },
            { path: 'cancel-sip', loadChildren: './cancel-SIP/cancel-sip.module#CancelSIPModule' },
            { path: 'invest-more', loadChildren: './invest-more/invest-more.module#InvestMoreModule' },
            { path: 'redeem', loadChildren: './redeem/redeem.module#RedeemModule' },
            { path: 'stp', loadChildren: './STP/action-stp.module#ActionSTPModule' },
            { path: 'switch', loadChildren: './switch/action-switch.module#ActionSwitchModule' },
            { path: 'swp', loadChildren: './SWP/action-swp.module#ActionSwpModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActionRoutingModule { }
