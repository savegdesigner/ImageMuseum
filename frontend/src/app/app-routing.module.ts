import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { UserObrasComponent } from './components/user/user-obras/user-obras.component';
import { UserObraCreateComponent } from './components/user/user-obra-create/user-obra-create.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { UserObraUpdateComponent } from './components/user/user-obra-update/user-obra-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth/signin',
    component: SigninComponent
  },
  {
    path: 'auth/signup',
    component: SignupComponent
  },
  {
    path: 'user/perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/obras',
    component: UserObrasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/obras/create',
    component: UserObraCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/obras/update/:id',
    component: UserObraUpdateComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
