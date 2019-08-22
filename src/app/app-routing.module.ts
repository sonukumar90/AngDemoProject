import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Register/register/register.component';
import { PageNotFoundComponent } from './Error/page-not-found/page-not-found.component';
import { UserdataComponent } from './Data/userdata/userdata.component';
import { LoginComponent } from './Login/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { EditComponent } from './page/edit/edit.component';

const routes: Routes = [
{path : 'Register', component: RegisterComponent},
{path : 'Login', component: LoginComponent},
{path : 'About' , component: AboutComponent},
{path : 'Contact' , component: ContactComponent},
{ path: 'edit-user', component: EditComponent },
{path: '', component: UserdataComponent, canActivate: [AuthGuardService]},
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
