import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGoalsComponent } from './add-goals.component';

const routes: Routes = [
    {
        path: '',
        component: AddGoalsComponent,
        children: [
            { path: '', redirectTo: 'addGoals', pathMatch: 'prefix' },
            { path: 'addGoals', loadChildren: './add-goal/add-goal.module#AddGoalModule' },
            { path: 'retirementPlan', loadChildren: './retirement-plan/retirement-plan.module#RetirementPlanModule' },
            { path: 'retirementPlanDetail', loadChildren: './retirement-plan-details/retirement-plan-details.module#RetirementPlanDetailModule' },
            { path: 'retirementPlanInvest', loadChildren:'./retirement-plan-invest/retirement-plan-invest.module#RetirementPlanInvestModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddGolasRoutingModule { }
