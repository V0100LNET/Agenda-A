import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor() { }

    handledRegister(){
        window.location.href = '/register';
    } 

}
