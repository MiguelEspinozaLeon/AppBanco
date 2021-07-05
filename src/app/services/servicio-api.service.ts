import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {


  private url_estadodecuenta = "https://equipo2-api-banco.herokuapp.com/estadodecuenta/"
  private url_añadircliente = "https://equipo2-api-banco.herokuapp.com/add"
  private url_abrircuenta = "https://equipo2-api-banco.herokuapp.com/abrircuenta/"
  private url_tarjetas = "https://equipo2-api-banco.herokuapp.com/tarjetas/"
  private url_deposito = "https://equipo2-api-banco.herokuapp.com/deposito"
  private url_retiro = "https://equipo2-api-banco.herokuapp.com/retiro"
  private url_transferencia = "https://equipo2-api-banco.herokuapp.com/transferencia"
  constructor(private http: HttpClient) {


   }


   public getEstadoCuenta(_id: any){
     return this.http.get(this.url_estadodecuenta + _id);

   }

   public addCliente(body: any){
     return this.http.post(this.url_añadircliente, body, {responseType: 'text'});
   }

   public abrirCuenta(body: any){
     return this.http.post(this.url_abrircuenta,body,{responseType: 'text'});
   }
   public crearTarjeta(body: any){
     return this.http.post(this.url_tarjetas, body,{responseType:'text'});
   }
   public postRetiro(body: any){
     return this.http.post(this.url_retiro, body, {responseType: 'text'});
   }
   public postDeposito(body: any){
     return this.http.post(this.url_deposito, body, {responseType: 'text'});
   }
   public postTransferencia(body: any){
     return this.http.post(this.url_transferencia, body, {responseType: 'text'});
   }
}
