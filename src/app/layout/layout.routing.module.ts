import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'briefing', pathMatch: 'prefix' },
            { path: 'statements', loadChildren: './statements/statements.module#StatementsModule' },
            { path: 'briefing', loadChildren: './briefing/briefing.module#BriefingModule' },
            { path: 'myPortfolio', loadChildren: './my-portfolio/my-portfolio.module#MyportfolioModule' },
            { path: 'myWatchList', loadChildren: './my-watch-list/my-watch-list.module#MywatchModule' },
            { path: 'addExisting', loadChildren: './add-existing/add-existing.module#AddexistingModule' },
            { path: 'switches', loadChildren: './switches/switches.module#SwitchesModule' },
            { path: 'userInfo', loadChildren: './userInfo/userInfo.module#userInfoModule' },
            { path: 'orderPlace', loadChildren: './orderPlace/orderPlace.module#OrderPlaceModule' },
            { path: 'actions', loadChildren: './actions/action.module#ActionModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
