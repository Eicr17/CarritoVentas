import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceResponses } from '../modelos/Api-Response.model';
import { environment } from 'src/environments/environment';
import { MdlVentasCreacion } from '../modelos/mdl-ventas-creacion.model';

@Injectable({
  providedIn: 'root'
})
export class SrvVentasCreacionService {

  constructor(

    private httpClient : HttpClient

  ) {

   }
  postVenta( ventas_creacion:MdlVentasCreacion){
        return this.httpClient.post<IServiceResponses> (`${environment.api_carrito}/Ventas`, ventas_creacion)
      }
}
