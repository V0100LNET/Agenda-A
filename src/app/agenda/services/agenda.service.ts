import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios'
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {
    private base_url_api = 'https://agenda-interview.herokuapp.com/api/agenda';
    public setOpacity = document.body;
    public setSpinner = false;
    constructor(){}

    async requestLogin(dataLogin: any){
        try{
            this.setSpinner = true;                 
            this.setOpacity.classList.add("opacity");
            let requestDataBase = await axios.post(`${this.base_url_api}/login`, dataLogin);

            if(requestDataBase.data.status === 404 || requestDataBase.data.status === 405){
                this.setOpacity.classList.remove("opacity");
                this.setSpinner = false;                 
                Swal.fire({
                    icon: 'error',
                    title: '¡ERROR!',
                    text: requestDataBase.data.message,
                    confirmButtonText: 'Aceptar'
                })

                return
            }
            setTimeout(() => {
                window.location.href = '/agenda';
                console.log("inicio de sesion correcto");
                localStorage.setItem("name",requestDataBase.data.name);
                localStorage.setItem("email", dataLogin.email);
                this.setSpinner = false;                 
                this.setOpacity.classList.remove("opacity");
            },2000)

        }catch(error) {
            console.log(error);
        }
    }

    async requestRegister(dataRegister:any){
        try{
            this.setOpacity.classList.add("opacity");
            let requestDataBase = await axios.post(`${this.base_url_api}/register`, dataRegister);
            console.log(requestDataBase);
            if(requestDataBase.data.status === 405){
                Swal.fire({
                    icon: 'error',
                    title: '¡ERROR!',
                    text: requestDataBase.data.message,
                    confirmButtonText: 'Aceptar'
                })
                // setSpinner(false);
                this.setOpacity.classList.remove("opacity");
                return
            }
            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: '¡Registro Exitoso!',
                    confirmButtonText: 'Aceptar'
                })
                console.log("registro correcto");
                window.location.href = '/agenda';
                this.setOpacity.classList.remove("opacity");
            },2300)

        }catch(error) {
            console.log(error);
        }
    }

}
