import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AgendaModule { }
