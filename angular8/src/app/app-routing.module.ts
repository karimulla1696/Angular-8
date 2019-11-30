import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./users/user/user.component";
import {HomeComponent} from "./home/home.component";
import {RoutingServersComponent} from "./routing-server/servers.component";
import {UsersComponent} from "./users/users.component";
import {EditServerComponent} from "./routing-server/edit-server/edit-server.component";
import {RoutingServerComponent} from "./routing-server/server/server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./auth-guard.service";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
  { path: 'servers', canActivate: [AuthGuard], component: RoutingServersComponent, children: [
      { path: ':id', component: RoutingServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ] },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
