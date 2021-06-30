import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class AgendaModule { }
