import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from 'src/app/services/servicio-api.service';

@Component({
  selector: 'app-estadocuenta',
  templateUrl: './estadocuenta.component.html',
  styleUrls: ['./estadocuenta.component.css']
})
export class EstadocuentaComponent implements OnInit {
date: string;
transacciones: any[] = [];

  constructor(private service: ServicioApiService) {
    this.service.getEstadoCuenta('5245543287652111').subscribe(res =>{
     
      this.transacciones.push(res);
      this.transacciones = this.transacciones['0'];
      console.log(this.transacciones);

  });
}
  ngOnInit(): void {
    this.date = new Date().toLocaleDateString()
  }

  

}
