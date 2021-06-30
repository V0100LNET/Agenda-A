import { Component } from '@angular/core';
import { AgendaService } from 'src/app/agenda/services/agenda.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styles: [
  ]
})
export class SpinnerComponent{
    constructor(private spinnerService: AgendaService){}

    showSpinner = this.spinnerService.setSpinner;

    print(){
        console.log(this.showSpinner);
    }
}
