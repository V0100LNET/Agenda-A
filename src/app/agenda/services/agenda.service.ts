import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
    private base_url_api = 'https://agenda-interview.herokuapp.com/api/agenda/login';
    private data: object = {
        "email": "testU1@test.com",
        "password": "raiz04"
    }

    constructor(private http: HttpClient){}

    async requestLogin(dataLogin: any){
      
        try{
          let resquesDataBase = await axios.post(this.base_url_api, dataLogin)

          console.log(resquesDataBase);
          
        }catch(error) {
            console.log(error);
        }
    }

}
