import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SrvVentasService } from 'src/app/Servicios/srv-ventas.service';

@Component({
  selector: 'app-venta-actualizar',
  templateUrl: './venta-actualizar.component.html',
  styleUrls: ['./venta-actualizar.component.css']
})
export class VentaActualizarComponent {

  formVentaAc! : FormGroup

  constructor(private srvVenta : SrvVentasService,
              private formbuilder : FormBuilder
  ){

  }

  ngOnInit(){
    this.formVentaAc = this.formbuilder.group({
      id_venta : ['', Validators.required],
      establecimiento : ['', Validators.required],
      precio : ['',Validators.required],
      cantidad : ['',Validators.required],
      descuento : ['', Validators.required],
      existencia : ['', Validators.required]

    })
  }

  ActualizacionVenta(){
    this.srvVenta.actualizacionVentas(
      this.formVentaAc.value
    ).subscribe(
      (response) => {
        if (response.exitosa)
          alert(response.mensaje)
        else ("Error" + response.mensaje)
      },
      (fail : any) => {
        console.log(fail)
      }
    )
  }

}
