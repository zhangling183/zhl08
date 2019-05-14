import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, childroutes } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LoggedInGuard } from './loggedin.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children: childroutes, canActivate: [LoggedInGuard] },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginFormComponent },
]
@NgModule({
    declarations: [],

    imports: [


        RouterModule.forRoot(routes)//缺乏路由配置
    ],
    providers: [],
    bootstrap: []
})
export class AppRouterModule { }