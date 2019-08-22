import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Register/register/register.component';
import { UserServiceService } from './Services/user-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Error/page-not-found/page-not-found.component';
import { UserdataComponent } from './Data/userdata/userdata.component';
import { LoginComponent } from './Login/login/login.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AdminDasboardComponent } from './Admin/admin-dasboard/admin-dasboard.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { EditComponent } from './page/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PageNotFoundComponent,
    UserdataComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    AdminDasboardComponent,
    HeaderComponent,
    LogoutComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
