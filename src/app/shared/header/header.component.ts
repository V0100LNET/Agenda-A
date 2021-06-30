import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
    user_localStorage = localStorage.getItem("name");

    constructor(){}
}
