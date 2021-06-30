import { Component, OnInit } from '@angular/core';
import validateRegister from 'src/app/helpers/validateRegister';
import Swal from 'sweetalert2';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent{
    dataRegister = {
      "name": "",
      "email": "",
      "password": "",
      "repeat_password": "",
    }

    constructor(private serviceRegister: AgendaService){} 

    setDataN(event:any){
        this.dataRegister.name = event.target.value;
    }

    setDataE(event:any){
        this.dataRegister.email = event.target.value;
    }

    setDataP(event:any){
        this.dataRegister.password = event.target.value;
    }

    setDataRP(event:any){
        this.dataRegister.repeat_password = event.target.value;
    }


    async submitRegister(event:any){
        event.preventDefault();

        const validateData = await validateRegister(this.dataRegister);
        if(Object.keys(validateData).length != 0){
          Swal.fire({
              icon: 'error',
              title: '¡ERROR!',
              text: (validateData.name || validateData.email || validateData.password || validateData.repeat_password || validateData.equals_password),
              confirmButtonText: 'Aceptar'
          })

            return;
        }

        console.log("registro correcto");
        this.serviceRegister.requestRegister(this.dataRegister);
    }

    submitLogin(event:any){
        event.preventDefault();
        window.location.href = "/login";
    }

}
