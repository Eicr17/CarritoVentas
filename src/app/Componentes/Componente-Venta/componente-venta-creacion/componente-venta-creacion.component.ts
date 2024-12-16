import { Component } from '@angular/core';
import { MdlClienteCreacion } from 'src/app/modelos/mdl-cliente-creacion.model';
import { MdlVentasCreacion } from 'src/app/modelos/mdl-ventas-creacion.model';
import { MdlVentas } from 'src/app/modelos/mdl-ventas.model';
import { SrvVentasCreacionService } from 'src/app/Servicios/srv-ventas-creacion.service';

@Component({
  selector: 'app-componente-venta-creacion',
  templateUrl: './componente-venta-creacion.component.html',
  styleUrls: ['./componente-venta-creacion.component.css']
})
export class ComponenteVentaCreacionComponent {
lstVenta! : MdlVentasCreacion[];
establecimiento! : string;
precio! : number;
cantidad_producto!: number;
fecha_venta! : Date;
descuento! : number;
existencias! : number;

constructor(

  private srvVentasCreacion : SrvVentasCreacionService
){


}

CrearVentas(){
this.srvVentasCreacion.postVenta({
establecimiento: this.establecimiento,
precio: this.precio,
cantidad_producto:  this.cantidad_producto,
fecha_venta: this.fecha_venta,
descuento : this.descuento,
existencias: this.existencias
  }
).subscribe(
  (resp) =>{
    let respuesta  : string ="";
    respuesta = resp.message;
  },
  (fail: any)=>{
    alert(fail)
  }
)
}

}
