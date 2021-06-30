import { Component, OnInit } from '@angular/core';
import validateLogin from 'src/app/helpers/validateLogin';
import { AgendaService } from '../../services/agenda.service';
import Swal from 'sweetalert2';

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

    setDataE(event:any){
        this.dataLogin.email = event.target.value;
    }

    setDataP(event:any){
        this.dataLogin.password = event.target.value;
    }

    async submitLogin(event: any){
        event.preventDefault();
        const validate = await validateLogin(this.dataLogin);

        if(validate.email || validate.password){
            Swal.fire({
                icon: 'error',
                title: '¡ERROR!',
                text: validate.email || validate.password,
                confirmButtonText: 'Aceptar'
            })
            return
        }
        
        if(Object.keys(validate).length === 0){
            this.loginService.requestLogin(this.dataLogin);
        }
    }

    submitRegister(event:any){
        event.preventDefault();
        window.location.href = '/register';
    }

}
