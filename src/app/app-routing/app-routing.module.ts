
import { PessoasListComponent } from './../components/pessoas-list/pessoas-list.component';
import { UsersGuardGuard } from './../guards/users-guard.guard';
import { UserDetailsComponent } from './../components/user-details/user-details.component';
import { UsersListComponent } from './../components/users-list/users-list.component';
import { AppModule } from './../app.module';
import { ListComponent } from './../components/list/list.component';
import { HomeComponent } from './../components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmptyUserDetailsComponent } from '../components/empty-user-details/empty-user-details.component';



const routeConfig: Routes = [
  { path: "home", component: HomeComponent },
  { path: "list", component: ListComponent, canActivate: [UsersGuardGuard] },
  {
    path: "users", component: UsersListComponent, canActivateChild: [UsersGuardGuard],
    children: [{ path: ":id", component: UserDetailsComponent }]
    //{ path: "", component: EmptyUserDetailsComponent }]
  },
  { path: "pessoas", component: PessoasListComponent },
  { path: "**", redirectTo: "/home" }]


@NgModule({
  providers: [
    UsersGuardGuard
  ],
  imports: [
    RouterModule.forRoot(routeConfig)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
