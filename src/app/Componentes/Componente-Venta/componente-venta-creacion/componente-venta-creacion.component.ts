import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MdlCliente } from 'src/app/modelos/mdl-cliente.model';
import { MdlVentasCreacion } from 'src/app/modelos/mdl-ventas-creacion.model';
import { SrvVentasService } from 'src/app/Servicios/srv-ventas.service';

@Component({
  selector: 'app-componente-venta-creacion',
  templateUrl: './componente-venta-creacion.component.html',
  styleUrls: ['./componente-venta-creacion.component.css']
})
export class ComponenteVentaCreacionComponent {
lstVenta! : MdlVentasCreacion[];
lstCliente: MdlCliente[] = [];

establecimiento! : string;
precio! : number;
cantidad_producto!: number;
descuento! : number;
existencias! : number;

constructor(

  private srvVentasLista : SrvVentasService,
  private FormBuilder: FormBuilder
){


}

CrearVentas(){
this.srvVentasLista.CrearVentas({
establecimiento: this.establecimiento,
precio: this.precio,
cantidad_producto:  this.cantidad_producto,
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
