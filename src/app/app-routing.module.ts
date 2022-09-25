import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard }  from './auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomepageComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'admin', 
    component: AdminComponent,  
    canActivate: [AuthGuard] 
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }