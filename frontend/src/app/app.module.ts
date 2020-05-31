import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { SignupComponent } from './auth/signup/signup.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { UserObrasComponent } from './components/user/user-obras/user-obras.component';
import { UserObraCreateComponent } from './components/user/user-obra-create/user-obra-create.component';
import { SigninComponent } from './auth/signin/signin.component';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { UserObraUpdateComponent } from './components/user/user-obra-update/user-obra-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PerfilComponent,
    UserObrasComponent,
    UserObraCreateComponent,
    SigninComponent,
    SignupComponent,
    UserObraUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbCarouselModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
