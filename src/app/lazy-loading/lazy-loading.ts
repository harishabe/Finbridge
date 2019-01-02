import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/finbridge', pathMatch: 'full' },
  { path: 'finbridge', loadChildren: './../landing-page/landing-page.module#LandingPageModule' },
  // { path: 'all', redirectTo: '/all', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './../layout/layout.module#LayoutModule' },
  { path: 'login', loadChildren: './../login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './../signup/signup.module#SignupModule' },
  { path: 'forget-password', loadChildren: './../forget-pwd/forget-pwd.module#ForgetPwdModule' },
  { path: 'equity', loadChildren: './../explore-funds/equity/equity.module#EquityModule' },
  { path: 'all', loadChildren: './../explore-funds/all-type/all-type.module#AllTypeModule' },
  { path: 'addGoal', loadChildren: './../add-goals/add-goals.module#AddGoalsModule' },
  { path: 'moreDetail', loadChildren: './../explore-funds/stockMoreDetail/stockMoreDetail.module#StockMoreDetailModule' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LazyloadingModule { }
