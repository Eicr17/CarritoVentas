import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MdlClienteCreacion } from '../modelos/mdl-cliente-creacion.model';
import { IServiceResponses } from '../modelos/Api-Response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SrvClienteCreacionService {

  constructor(
    private httpClient: HttpClient

  ) {

   }
   post( clientes_creacion:MdlClienteCreacion){
    return this.httpClient.post<IServiceResponses> (`${environment.api_carrito}/Cliente`, clientes_creacion)
  }
}
