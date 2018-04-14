import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaProvider {

  url = "https://raw.githubusercontent.com/munifgebara/reactnative/master/lista/lista.json"

  constructor(public http: HttpClient) {
    console.log('Hello ListaProvider Provider');
  }

  buscaLista() {
    return this.http.get(this.url);
  }

}
