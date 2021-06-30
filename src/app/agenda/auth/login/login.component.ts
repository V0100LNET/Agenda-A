import { Component, OnInit } from '@angular/core';
import validateLogin from 'src/app/helpers/validateLogin';
import { DataLogin } from '../../interfaces/login.inteface';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{
    constructor(private loginService: AgendaService){}
    dataLogin = {
        email: "",
        password: ""
    }

    setDataL(event:any){
        this.dataLogin.email = event.target.value;
    }

    setDataP(event:any){
        this.dataLogin.password = event.target.value;
    }

    async submitLogin(event: any){
        event.preventDefault();
        const validate = await validateLogin(this.dataLogin);

        if(validate.email || validate.password){
            console.log("Todos los datos son obligatorios");
        }
        
        console.log(validate)
        if(Object.keys(validate).length === 0){
            console.log("No hay errores");
            this.loginService.requestLogin(this.dataLogin);
        }
    }

    submitRegister(){}

}
