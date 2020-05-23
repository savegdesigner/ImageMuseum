import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { UserObrasComponent } from './components/user/user-obras/user-obras.component';
import { UserObraCreateComponent } from './components/user/user-obra-create/user-obra-create.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user/perfil',
    component: PerfilComponent
  },
  {
    path: 'user/obras',
    component: UserObrasComponent
  },
  {
    path: 'user/obras/create',
    component: UserObraCreateComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
