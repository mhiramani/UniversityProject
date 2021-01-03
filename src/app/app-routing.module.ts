import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UniversityAddComponent } from './components/university-add/university-add.component';
import { UniversityListComponent } from './components/university-list/university-list.component';

const routes: Routes = [

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    

  },
  {
    path: "university_list",
    component: UniversityListComponent
  },
  {
    path: "university_add",
    component: UniversityAddComponent
  },
    {
    path: "home",
    component: HomeComponent
  },
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
