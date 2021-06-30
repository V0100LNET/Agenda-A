import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AgendaService } from './agenda/services/agenda.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
  ],
  providers: [
    AgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
