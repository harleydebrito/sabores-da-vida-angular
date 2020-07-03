import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';


const routes: Routes = [
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
