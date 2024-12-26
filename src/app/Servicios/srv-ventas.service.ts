import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceResponses } from '../modelos/Api-Response.model';
import { environment } from 'src/environments/environment';
import { MdlVentasCreacion } from '../modelos/mdl-ventas-creacion.model';

@Injectable({
  providedIn: 'root'
})
export class SrvVentasService {

  constructor(private httpClient: HttpClient) {


   }

   ObtenerVentas(){

    return this.httpClient.get<IServiceResponses>(`${environment.api_carrito}/Ventas`);

   }

  CrearVentas( ventas_creacion:MdlVentasCreacion){
        return this.httpClient.post<IServiceResponses> (`${environment.api_carrito}/Ventas`, ventas_creacion)
      }

}
