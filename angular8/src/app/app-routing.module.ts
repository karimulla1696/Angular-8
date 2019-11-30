import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./users/user/user.component";
import {HomeComponent} from "./home/home.component";
import {RoutingServersComponent} from "./routing-server/servers.component";
import {UsersComponent} from "./users/users.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'servers', component: RoutingServersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
