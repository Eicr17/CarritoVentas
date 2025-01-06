import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SrvVentasService } from 'src/app/Servicios/srv-ventas.service';

@Component({
  selector: 'app-componente-venta-eliminacion',
  templateUrl: './componente-venta-eliminacion.component.html',
  styleUrls: ['./componente-venta-eliminacion.component.css']
})
export class ComponenteVentaEliminacionComponent {

  formVentaEliminar! : FormGroup

  constructor(private srvVenta: SrvVentasService,
              private formbuider : FormBuilder
  ){

  }

  ngOnInit(){
    this.formVentaEliminar = this.formbuider.group({
      id_venta : ['', Validators.required]
    })
  }
  EliminarVenta(){
    this.srvVenta.eliminarVentas(
      this.formVentaEliminar.controls['id_venta'].value
    ).subscribe(
      (response) => {
        console.log(response);
        if(response.exitosa )
          alert (response.mensaje)
        else
        alert ("Error: " + response.mensaje)
      },
      (fail : any) => {
        console.log (fail)
      }
    )
  }

}
