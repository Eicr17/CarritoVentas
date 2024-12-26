import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MdlCliente } from '../modelos/mdl-cliente.model';
import { environment } from 'src/environments/environment';
import { IServiceResponses } from '../modelos/Api-Response.model';
import { MdlClienteCreacion } from '../modelos/mdl-cliente-creacion.model';

@Injectable({
  providedIn: 'root'
})
export class SrvClienteService {

  constructor(

    private  httpClient : HttpClient

  ) {

   }

   obtenerClientes(){

    return this.httpClient.get<IServiceResponses> (`${environment.api_carrito}/Cliente`)

   }

     CrearCliente( clientes:MdlClienteCreacion){
       return this.httpClient.post<IServiceResponses> (`${environment.api_carrito}/Cliente`, clientes)
     }
   
}
