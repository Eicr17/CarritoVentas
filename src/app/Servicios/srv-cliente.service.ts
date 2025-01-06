import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MdlCliente } from '../modelos/mdl-cliente.model';
import { environment } from 'src/environments/environment';
import { IServiceResponses } from '../modelos/Api-Response.model';
import { MdlClienteCreacion } from '../modelos/mdl-cliente-creacion.model';
import { mdlClienteActualizar } from '../modelos/mdl-cliente-actualizar';

@Injectable({
  providedIn: 'root'
})
export class SrvClienteService {

  constructor(

    private  httpClient : HttpClient

  ) {

   }

   obtenerClientes(){

    return this.httpClient.get<IServiceResponses> (`${environment.api_carrito}/Cliente/Obtener`)

   }

     CrearCliente( clientes:MdlClienteCreacion){
       return this.httpClient.post<IServiceResponses> (`${environment.api_carrito}/Cliente/Crear`, clientes)
     }

     actualizarCliente (clienteActualizar:mdlClienteActualizar){
      return this.httpClient.put<IServiceResponses> (`${environment.api_carrito}/Cliente/Actualizar`, clienteActualizar)
     }

     eliminarCliente (EliminacionCliente: number){
      return this.httpClient.put<IServiceResponses> (`${environment.api_carrito}/Cliente/Eliminar/${EliminacionCliente}`, EliminacionCliente)
     }
   
}
