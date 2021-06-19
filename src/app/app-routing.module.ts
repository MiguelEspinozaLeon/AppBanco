import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AperturaCuentaComponent } from './apertura-cuenta/apertura-cuenta.component';
import { EstadocuentaComponent } from './components/estadocuenta/estadocuenta.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';

const routes: Routes = [
  {path:'aperturacuenta', component: AperturaCuentaComponent},
  {path:'transacciones', component: TransaccionesComponent},
  {path:'retiro', component: RetiroComponent},
  {path:'estadodecuenta', component: EstadocuentaComponent},
  {path:'**', pathMatch:'full' , redirectTo: 'aperturacuenta'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
