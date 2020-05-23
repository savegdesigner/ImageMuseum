import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { UserObrasComponent } from './components/user/user-obras/user-obras.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UserObraCreateComponent } from './components/user/user-obra-create/user-obra-create.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PerfilComponent,
    UserObrasComponent,
    UserObraCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
