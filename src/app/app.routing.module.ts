import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./agenda/about/about.component";
import { ContactComponent } from "./agenda/contact/contact.component";

import { HomeComponent } from "./agenda/home/home.component";
import { ProjectsComponent } from "./agenda/projects/projects.component";


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
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