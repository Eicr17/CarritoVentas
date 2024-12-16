import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MdlProductoCrear } from '../modelos/mdl-producto-creacion.model';
import { IServiceResponses } from '../modelos/Api-Response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SrvProductoCreacionService {

  constructor(
   private httpClient: HttpClient
  ) { 


  }
    postProducto( producto_creacion:MdlProductoCrear){
      return this.httpClient.post<IServiceResponses> (`${environment.api_carrito}/Producto`, producto_creacion)
    }
}
