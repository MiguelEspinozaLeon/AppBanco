import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AñadirTransferenciaModel } from 'src/app/interfaces/añadir-transferencia.model';
import { ServicioApiService } from 'src/app/services/servicio-api.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  time = new Date();
  rxTime = new Date();
  intervalId;
numero_transaccion: number;
date: string;

  formulario: FormGroup;
  constructor(private service: ServicioApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.date = new Date().toLocaleDateString()
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
    this.formulario = this.fb.group({
      numero_tarjeta_origen: [],
      monto_transaccion: [],
      numero_tarjeta_destino: [],
   
    });
  }

  guardarTransferencia(){
    if (this.formulario.status=='VALID'){
      console.log(this.formulario.value);
      const info = this.formulario.value;
     
      const Transferencia: AñadirTransferenciaModel = {
        numero_tarjeta_origen : info.numero_tarjeta_origen,
        monto_transaccion: info.monto_transaccion,
        numero_tarjeta_destino: info.numero_tarjeta_destino
       




      }
      this.service.postTransferencia(Transferencia).subscribe(res =>{
        
        console.log(res);
      });

  }

  }

}
