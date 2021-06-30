import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
    user_localStorage = localStorage.getItem("name");

    constructor(){}

    submitLogin(){
        window.location.href = '/login';
    }

    submitRegister(){
        window.location.href = '/register';
    }
}
