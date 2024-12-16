import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteClienteListaComponent } from './Componentes/Componente-Cliente/componente-cliente-lista/componente-cliente-lista.component';
import { ComponenteClienteCreacionComponent } from './Componentes/Componente-Cliente/componente-cliente-creacion/componente-cliente-creacion.component';
import { ComponenteClienteEliminarComponent } from './Componentes/Componente-Cliente/componente-cliente-eliminar/componente-cliente-eliminar.component';
import { ComponenteVentaCreacionComponent } from './Componentes/Componente-Venta/componente-venta-creacion/componente-venta-creacion.component';
import { ComponenteVentaEliminacionComponent } from './Componentes/Componente-Venta/componente-venta-eliminacion/componente-venta-eliminacion.component';
import { ComponenteProductoEliminacionComponent } from './Componentes/Componente-Producto/componente-producto-eliminacion/componente-producto-eliminacion.component';
import { ComponenteProductoListaComponent } from './Componentes/Componente-Producto/componente-producto-lista/componente-producto-lista.component';
import { ComponenteProductoCreacionComponent } from './Componentes/Componente-Producto/componente-producto-creacion/componente-producto-creacion.component';
import { ComponenteVentaListaComponent } from './Componentes/Componente-Venta/componente-venta-lista/componente-venta-lista.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    ComponenteClienteListaComponent,
    ComponenteClienteCreacionComponent,
    ComponenteClienteEliminarComponent,
    ComponenteProductoListaComponent,
    ComponenteProductoCreacionComponent,
    ComponenteVentaListaComponent,
    ComponenteProductoEliminacionComponent,
    ComponenteVentaCreacionComponent,
    ComponenteVentaEliminacionComponent,
    ComponenteProductoEliminacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
