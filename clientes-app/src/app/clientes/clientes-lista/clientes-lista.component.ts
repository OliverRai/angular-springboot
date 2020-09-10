import { ClientesService } from './../../clientes.service';
import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso : String;
  mensagemErro : String;

  constructor(private service: ClientesService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.service
      .getClientes()
      .subscribe(response => this.clientes = response);

  }

  novoCadastro() {
    this.router.navigate(['/clientes/form']);
  }

  prepararDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente(cliente: Cliente) {
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe( response =>
        {this.mensagemSucesso = "Cliente deletado com sucesso!",
        this.ngOnInit();
      },
        erro => this.mensagemErro = "Erro ao deletar cliente!"
      )
  }

}
