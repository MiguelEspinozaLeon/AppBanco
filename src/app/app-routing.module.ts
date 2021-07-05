import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AperturaCuentaComponent } from './apertura-cuenta/apertura-cuenta.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { EstadocuentaComponent } from './components/estadocuenta/estadocuenta.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';

const routes: Routes = [
  {path:'aperturacuenta', component: AperturaCuentaComponent},
  {path:'transacciones', component: TransaccionesComponent},
  {path:'retiro', component: RetiroComponent},
  {path: 'deposito', component: DepositoComponent},
  {path: 'transferencia', component: TransferenciaComponent},
  {path:'estadodecuenta', component: EstadocuentaComponent},
  {path:'**', pathMatch:'full' , redirectTo: 'aperturacuenta'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
