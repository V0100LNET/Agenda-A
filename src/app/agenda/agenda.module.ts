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
import { AgendaUserComponent } from './dashboard/agenda-user.component';
import { NewContactComponent } from './modal/new-contact/new-contact.component';
import { EditContactComponent } from './modal/edit-contact/edit-contact.component';
import { CardsContactComponent } from './cards-contact/cards-contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    RegisterComponent,
    LoginComponent,
    AgendaUserComponent,
    NewContactComponent,
    EditContactComponent,
    CardsContactComponent,
  ],
  exports: [
    AgendaUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class AgendaModule { }
