import { Component } from '@angular/core';
import { MdlProductoCrear } from 'src/app/modelos/mdl-producto-creacion.model';
import { SrvProductosService } from 'src/app/Servicios/srv-productos.service';

@Component({
  selector: 'app-componente-producto-creacion',
  templateUrl: './componente-producto-creacion.component.html',
  styleUrls: ['./componente-producto-creacion.component.css']
})
export class ComponenteProductoCreacionComponent {
lstProducto!  : MdlProductoCrear[];
nombre_producto!: string;
existencia! : number;
marca! : string;
precio! : number;

constructor(

  private  srvProductoCreacion : SrvProductosService
){

}

CrearProducto(){
this.srvProductoCreacion.CrearProducto({
nombre_producto: this.nombre_producto,
existencia: this.existencia,
marca: this.marca,
precio: this.precio
}
).subscribe(
  (resp) => {
    let respuesta  : string = "";
    respuesta = resp.message;
  },
  (fail:any)=>{
    alert(fail)
  }
)
}
}
