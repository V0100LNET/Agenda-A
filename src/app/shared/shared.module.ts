import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app.routing.module';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
