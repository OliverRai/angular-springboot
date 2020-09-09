import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/TemplateModule'
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module'
import { ClientesService } from './clientes.service';
import { ServicoPrestadoService } from './servico-prestado.service';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
