import { Component, OnInit } from '@angular/core';

import { Cliente } from '../clientes-form/cliente' 

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente:Cliente;
  
  constructor() { }

  ngOnInit(): void {
  }

}
