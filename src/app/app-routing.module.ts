import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {SigninComponent} from './component/signin/signin.component';
import {MainBodyComponent} from './component/main/main-body/main-body.component';


const routes: Routes = [{
  path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', component: MainBodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
