import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AperturaCuentaComponent } from './apertura-cuenta/apertura-cuenta.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { EstadocuentaComponent } from './components/estadocuenta/estadocuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AperturaCuentaComponent,
    TransaccionesComponent,
    RetiroComponent,
    EstadocuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
