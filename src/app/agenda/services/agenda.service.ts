import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
    private base_url_api = 'https://agenda-interview.herokuapp.com/api/agenda/login';
    private data: object = {
        "email": "testU1@test.com",
        "password": "raiz05"
    }

    constructor(private http: HttpClient){}

    async requestLogin(){
        try{
          const resquesDataBase = await fetch(this.base_url_api,{
              method: 'POST',
              mode: 'cors',
              credentials: 'same-origin',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.data)
          });

          console.log(resquesDataBase);
          
        }catch(error) {
            console.log(error);
        }
    }

}
