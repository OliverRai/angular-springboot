import { Cliente } from './clientes/clientes-form/cliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http : HttpClient ) {
    
   }

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = "Raiane";
    cliente.cpf = "88888888888888888";
    return cliente;
  }
}
