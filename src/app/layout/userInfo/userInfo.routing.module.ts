import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { userInfoComponent } from './userInfo.component';

const routes: Routes = [
    {
        path: '',
        component: userInfoComponent,
        children: [
            { path: '', redirectTo: 'panDetails', pathMatch: 'prefix' },          
            { path: 'bankDetails', loadChildren: './bankDetails/bankDetails.module#BankDetailsModule' },
            { path: 'panDetails', loadChildren: './panCardDetails/panCardDetails.module#PanDetailsModule' },
            { path: 'userDetails', loadChildren: './userDetails/userDetails.module#UserDetailsModule' },
            { path: 'uploadImage', loadChildren: './uploadImg/uploadImg.module#UploadImgModule' },
            { path: 'riskProfiler', loadChildren: './riskProfiler/riskProfiler.module#RiskProfilerModule' }
              
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class userInfoRoutingModule {}
