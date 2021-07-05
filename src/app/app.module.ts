import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AperturaCuentaComponent } from './apertura-cuenta/apertura-cuenta.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { EstadocuentaComponent } from './components/estadocuenta/estadocuenta.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AperturaCuentaComponent,
    TransaccionesComponent,
    RetiroComponent,
    EstadocuentaComponent,
    DepositoComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
