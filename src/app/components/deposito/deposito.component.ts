import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioApiService } from 'src/app/services/servicio-api.service';
import { AñadirRetiroModel } from 'src/app/interfaces/añadir-retiro.model';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  time = new Date();
  rxTime = new Date();
  intervalId;
  date: string;

  formulario: FormGroup;
  dato: string;
  constructor(private service: ServicioApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.date = new Date().toLocaleDateString()
     // Using Basic Interval
     this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);


    this.formulario = this.fb.group({
      numero_tarjeta: [],
      monto_transaccion: []
    });
  }

  guardarDeposito(){
    if (this.formulario.status=='VALID'){
      console.log(this.formulario.value);
      const info = this.formulario.value;
     
      const Deposito: AñadirRetiroModel = {
        numero_tarjeta : info.numero_tarjeta,
       
        monto_transaccion: info.monto_transaccion,
       




      }
      this.service.postDeposito(Deposito).subscribe(res =>{
        
        console.log(res);
      });

  }
  }

}
