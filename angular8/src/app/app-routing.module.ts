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
import {CanDeactiveGuard} from "./routing-server/edit-server/can-deactive-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolver} from "./routing-server/server/server-resolver.service";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
  { path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: RoutingServersComponent,
    children: [
      { path: ':id', component: RoutingServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactiveGuard] }
    ] },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
