import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

/*
  Generated class for the PrecoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrecoProvider {
  constructor(public http: HttpClient) {
    console.log('Hello PrecoProvider Provider');
  }

  precosJson(){

    return this.http.get<any[]>('http://localhost')

  }
} 