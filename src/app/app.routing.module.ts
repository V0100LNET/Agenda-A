import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./agenda/about/about.component";
import { LoginComponent } from "./agenda/auth/login/login.component";
import { RegisterComponent } from "./agenda/auth/register/register.component";
import { ContactComponent } from "./agenda/contact/contact.component";
import { AgendaUserComponent } from "./agenda/dashboard/agenda-user.component";

import { HomeComponent } from "./agenda/home/home.component";
import { ProjectsComponent } from "./agenda/projects/projects.component";


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'agenda',
        component: AgendaUserComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'project',
        component: ProjectsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}