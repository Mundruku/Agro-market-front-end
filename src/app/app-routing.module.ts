import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/auth/login/login.component';
import { SignupComponent } from './user/auth/signup/signup.component';
import { HomecontentComponent } from './user/home/homecontent/homecontent.component';
import { PageNotFoundComponent } from './user/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home', component:HomecontentComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
