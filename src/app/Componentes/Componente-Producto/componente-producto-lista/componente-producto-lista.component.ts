import { Component } from '@angular/core';
import { MdlProducto } from 'src/app/modelos/mdl-Producto.model';
import { SrvProductosService } from 'src/app/Servicios/srv-productos.service';

@Component({
  selector: 'app-componente-producto-lista',
  templateUrl: './componente-producto-lista.component.html',
  styleUrls: ['./componente-producto-lista.component.css']
})
export class ComponenteProductoListaComponent {
lstProducto : MdlProducto[] = [];
constructor(private srvProducto : SrvProductosService){

  this.srvProducto.obtenerProductos().subscribe(
    (response) =>{
      this.lstProducto = response.datos;
    },
    (fail:any)=>{
      console.log(fail);
    }
  )
}

  
}
