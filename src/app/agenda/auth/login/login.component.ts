import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{
    constructor(private loginService: AgendaService){}

    submitLogin(event: any){
        event.preventDefault();
        this.loginService.requestLogin()
    }

    submitRegister(){}

}
