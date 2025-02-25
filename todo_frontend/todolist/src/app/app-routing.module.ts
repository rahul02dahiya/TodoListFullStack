import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'addcategory', component: AddCategoryComponent, canActivate: [AuthGuard]},
  {path: 'addtodo', component: AddTodoComponent, canActivate: [AuthGuard]},
  {path:"",redirectTo:'/home', pathMatch:'full'},
  {path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
