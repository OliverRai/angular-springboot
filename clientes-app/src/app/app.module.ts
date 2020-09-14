import { TokenInterceptor } from './token.interceptor';

import { AuthService } from './auth.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/TemplateModule'
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module'
import { ClientesService } from './clientes.service';
import { ServicoPrestadoService } from './servico-prestado.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
    FormsModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
