import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MdlProducto } from '../modelos/mdl-Producto.model';
import { IServiceResponses } from '../modelos/Api-Response.model';
import { environment } from 'src/environments/environment';
import { MdlProductoCrear } from '../modelos/mdl-producto-creacion.model';

@Injectable({
  providedIn: 'root'
})
export class SrvProductosService {

  constructor(private httpClient: HttpClient ) {     
      
  }

  obtenerProductos (){
      return this.httpClient.get<IServiceResponses>(`${environment.api_carrito}/Producto`);
  }

  CrearProducto( producto_creacion:MdlProductoCrear){
        return this.httpClient.post<IServiceResponses> (`${environment.api_carrito}/Producto`, producto_creacion)
      }
  }


