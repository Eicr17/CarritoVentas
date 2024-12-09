import { Component } from '@angular/core';
import { SrvProductosService } from './Servicios/srv-productos.service';
import { MdlProducto } from './modelos/mdl-Producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IndCarritoCompras';
  lstProductos: MdlProducto[] = [];
  
  constructor(private srvProductos : SrvProductosService){
    
    this.srvProductos.obtenerProductos().subscribe(
      (response) => {
          //console.log(response);
          this.lstProductos = response.datos;
          //console.log(this.lstProductos[0]);
          //console.log(this.lstProductos[0].id_producto);
          //console.log(this.lstProductos);
      },
      (fail : any) =>{
          console.log(fail);
      }
    )
  }


}
