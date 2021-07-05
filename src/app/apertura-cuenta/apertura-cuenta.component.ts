import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioApiService } from '../services/servicio-api.service';
import { AñadirClienteModel } from '../interfaces/añadir-cliente.model';
import { AñadirCuentaModel } from '../interfaces/añadir-cuenta.model';
import { AñadirTarjetaModel } from '../interfaces/añadir-tarjeta.model';

@Component({
  selector: 'app-apertura-cuenta',
  templateUrl: './apertura-cuenta.component.html',
  styleUrls: ['./apertura-cuenta.component.css']
})
export class AperturaCuentaComponent implements OnInit {


  formulario: FormGroup;
  formulario_cuenta: FormGroup;
  cuenta_bancaria: number = (Math.floor(100000 + Math.random() * 900000));

  constructor(private fb: FormBuilder, private service: ServicioApiService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [],
      correo: [],
      apellido: [],
      telefono: [],
      rfc: [],
       id_cuentabancaria: [],
       codigo_cliente: [],
       ccv: [],
       numero_tarjeta:[],
       saldo: [],
       vigencia: [],
       tipo_tarjeta:[]


    });
    
  }


  guardarCliente(){
    if (this.formulario.status=='VALID'){
      console.log(this.formulario.value);
      const info = this.formulario.value;
     
      const cliente: AñadirClienteModel = {
        nombre: info.nombre,
        correo: info.correo,
        telefono: info.telefono,
        rfc: info.rfc ,
        apellido: info.apellido


      }
       const cuenta: AñadirCuentaModel = {
        id_cuentabancaria: info.id_cuentabancaria,
        rfc: info.rfc,
        codigo_cliente: info.codigo_cliente
        


       }
       const tarjeta: AñadirTarjetaModel = {
        ccv: info.ccv,
        numero_tarjeta: info.numero_tarjeta,
        saldo: info.saldo,
        vigencia: info.vigencia,
        tipo_tarjeta: info.tipo_tarjeta,
        id_cuentabancaria: info.id_cuentabancaria,
       }

      ;
      this.service.addCliente(cliente).subscribe(res =>{
        
        console.log(res);
      });
       this.service.abrirCuenta(cuenta).subscribe(res =>{
        console.log(res);
      });
      this.service.crearTarjeta(tarjeta).subscribe(res=>{
        console.log(res);
      })
    }
  }

 

}
