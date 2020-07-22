import { ClientesService } from './../../clientes.service';
import { Cliente } from './../clientes-form/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private service: ClientesService) { 
      
  }


  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe(response => this.clientes = response);

  }

}
