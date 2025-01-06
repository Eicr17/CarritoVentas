import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteClienteListaComponent } from './Componentes/Componente-Cliente/componente-cliente-lista/componente-cliente-lista.component';
import { ComponenteClienteCreacionComponent } from './Componentes/Componente-Cliente/componente-cliente-creacion/componente-cliente-creacion.component';
import { ComponenteVentaCreacionComponent } from './Componentes/Componente-Venta/componente-venta-creacion/componente-venta-creacion.component';
import { ComponenteVentaEliminacionComponent } from './Componentes/Componente-Venta/componente-venta-eliminacion/componente-venta-eliminacion.component';
import { ComponenteProductoEliminacionComponent } from './Componentes/Componente-Producto/componente-producto-eliminacion/componente-producto-eliminacion.component';
import { ComponenteProductoListaComponent } from './Componentes/Componente-Producto/componente-producto-lista/componente-producto-lista.component';
import { ComponenteProductoCreacionComponent } from './Componentes/Componente-Producto/componente-producto-creacion/componente-producto-creacion.component';
import { ComponenteVentaListaComponent } from './Componentes/Componente-Venta/componente-venta-lista/componente-venta-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteActualizarComponent } from './Componentes/Componente-Cliente/cliente-actualizar/cliente-actualizar.component';
import { ClienteEliminarComponent } from './Componentes/Componente-Cliente/cliente-eliminar/cliente-eliminar.component';
import { ProductoActualizarComponent } from './Componentes/Componente-Producto/producto-actualizar/producto-actualizar.component';
import { VentaActualizarComponent } from './Componentes/Componente-Venta/venta-actualizar/venta-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteClienteListaComponent,
    ComponenteClienteCreacionComponent,
    ComponenteProductoListaComponent,
    ComponenteProductoCreacionComponent,
    ComponenteVentaListaComponent,
    ComponenteProductoEliminacionComponent,
    ComponenteVentaCreacionComponent,
    ComponenteVentaEliminacionComponent,
    ComponenteProductoEliminacionComponent,
    ClienteActualizarComponent,
    ClienteEliminarComponent,
    ProductoActualizarComponent,
    VentaActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
