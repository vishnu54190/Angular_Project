import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import {TodolistComponent} from './todolist/todolist.component'

const routes: Routes = [{path: 'register', component: RegisterComponent},
{ path: '', component: NavbarComponent},
{ path: 'signin', component: SigninComponent},
{ path: 'todo', component:TodolistComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
