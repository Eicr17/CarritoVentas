import { Component } from '@angular/core';
import { MdlVentas } from 'src/app/modelos/mdl-ventas.model';
import { SrvVentasService } from 'src/app/Servicios/srv-ventas.service';

@Component({
  selector: 'app-componente-venta-lista',
  templateUrl: './componente-venta-lista.component.html',
  styleUrls: ['./componente-venta-lista.component.css']
})
export class ComponenteVentaListaComponent {
lstVentas: MdlVentas[] = [];

constructor(private _srvVentas: SrvVentasService){

  this._srvVentas.ObtenerVentas().subscribe(
    (response) =>{
       this.lstVentas = response.datos;
    },
    (fail:any)=>{
      console.log(fail);
    } 
  )
}

}
