import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceResponses } from '../modelos/Api-Response.model';
import { environment } from 'src/environments/environment';
import { MdlVentasCreacion } from '../modelos/mdl-ventas-creacion.model';
import { mdlVentaActualizar } from '../modelos/mdl-venta-actualizar';

@Injectable({
  providedIn: 'root'
})
export class SrvVentasService {

  constructor(private httpClient: HttpClient) {


   }

   ObtenerVentas(){

    return this.httpClient.get<IServiceResponses>(`${environment.api_carrito}/Ventas/Obtener`);

   }

  CrearVentas( ventas_creacion:MdlVentasCreacion){
        return this.httpClient.post<IServiceResponses> (`${environment.api_carrito}/Ventas/Crear`, ventas_creacion)
      }

  actualizacionVentas (venta_actualizacion : mdlVentaActualizar){
        return this.httpClient.put<IServiceResponses> (`${environment.api_carrito}/Ventas/Actualizar`, venta_actualizacion);
  }

  eliminarVentas (venta_eliminacion : number){
        return this.httpClient.put<IServiceResponses> (`${environment.api_carrito}/Ventas/Eliminar/${venta_eliminacion}`, venta_eliminacion);
  }

}
