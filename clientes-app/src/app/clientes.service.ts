import { Cliente } from './clientes/clientes-form/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http : HttpClient ) {

   }

   salvar( cliente : Cliente) : Observable<Cliente>{
      return this.http.post<Cliente>("http://localhost:8080/api/clientes", cliente)
   }

 /* getClientes() : Observable<Cliente[]>{
    return null;
  }*/

    getCliente() : Cliente[]{
      let cliente = new Cliente();
      cliente.id = 1;
      cliente.nome = 'Raiane';
      cliente.dataCadastro = '21/08/2020';
      cliente.cpf = '12345678900';
      return [cliente];
    }
}
