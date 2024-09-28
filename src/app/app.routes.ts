import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { logedGuard } from './core/guards/loged.guard';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {path:'', component:AuthLayoutComponent, canActivate:[logedGuard], children:[
        {path:'', redirectTo:'login', pathMatch:'full', title:'Login'},
        {path:'login', component:LoginComponent, title:'Login'},
        {path:'register', component:RegisterComponent, title:'register'}
    ]},
    {path:'', component:BlankLayoutComponent, canActivate:[authGuard], children:[
        {path:'', redirectTo:'home', pathMatch:'full', title:'home'},
        {path:'home', component:HomeComponent, title:'home'},
        {path:'details/:id', component:DetailsComponent, title:'details'},
    ]},
    {path:'**', component:NotFoundComponent, title:'404 Not Found'}
];
