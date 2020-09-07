import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';


@NgModule({
  declarations: [ServicoPrestadoFormComponent, ServicoPrestadoListaComponent],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule
  ]
})
export class ServicoPrestadoModule { }
