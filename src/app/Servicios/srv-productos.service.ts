import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MdlProducto } from '../modelos/mdl-Producto.model';
import { IServiceResponses } from '../modelos/Api-Response.model';
import { environment } from 'src/environments/environment';
import { MdlProductoCrear } from '../modelos/mdl-producto-creacion.model';
import { mdlProductoActualizar } from '../modelos/mdl-producto-actualizar';

@Injectable({
  providedIn: 'root'
})
export class SrvProductosService {

  constructor(private httpClient: HttpClient ) {     
      
  }

  obtenerProductos (){
      return this.httpClient.get<IServiceResponses>(`${environment.api_carrito}/Producto/Obtener`);
  }

  CrearProducto( producto_creacion:MdlProductoCrear){
        return this.httpClient.post<IServiceResponses> (`${environment.api_carrito}/Producto/Crear`, producto_creacion);
      }

  actualizarProducto( producto_actualizacion : mdlProductoActualizar){
        return this.httpClient.put<IServiceResponses> (`${environment.api_carrito}/Producto/Actualizar`, producto_actualizacion);
  }
  eliminarProducto( producto_eliminacion : number){
        return this.httpClient.put<IServiceResponses> (`${environment.api_carrito}/Producto/Eliminar/${producto_eliminacion}`, producto_eliminacion);
  }
  }


