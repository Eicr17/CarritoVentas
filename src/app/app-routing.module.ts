import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteClienteListaComponent } from './Componentes/Componente-Cliente/componente-cliente-lista/componente-cliente-lista.component';
import { ComponenteProductoListaComponent } from './Componentes/Componente-Producto/componente-producto-lista/componente-producto-lista.component';
import { ComponenteVentaListaComponent } from './Componentes/Componente-Venta/componente-venta-lista/componente-venta-lista.component';
import { ComponenteClienteCreacionComponent } from './Componentes/Componente-Cliente/componente-cliente-creacion/componente-cliente-creacion.component';
import { ComponenteProductoCreacionComponent } from './Componentes/Componente-Producto/componente-producto-creacion/componente-producto-creacion.component';
import { ComponenteVentaCreacionComponent } from './Componentes/Componente-Venta/componente-venta-creacion/componente-venta-creacion.component';
import { ClienteActualizarComponent } from './Componentes/Componente-Cliente/cliente-actualizar/cliente-actualizar.component';
import { ClienteEliminarComponent } from './Componentes/Componente-Cliente/cliente-eliminar/cliente-eliminar.component';
import { ProductoActualizarComponent } from './Componentes/Componente-Producto/producto-actualizar/producto-actualizar.component';
import { VentaActualizarComponent } from './Componentes/Componente-Venta/venta-actualizar/venta-actualizar.component';
import { ComponenteVentaEliminacionComponent } from './Componentes/Componente-Venta/componente-venta-eliminacion/componente-venta-eliminacion.component';
import { ComponenteProductoEliminacionComponent } from './Componentes/Componente-Producto/componente-producto-eliminacion/componente-producto-eliminacion.component';

const routes: Routes = [
  {
   path: 'cliente-lista',
   component: ComponenteClienteListaComponent,
  },

  {
    path: 'producto-lista',
    component: ComponenteProductoListaComponent,
  },

  {
    path: 'ventas-lista',
    component: ComponenteVentaListaComponent,
  },
  
{
  path: 'cliente-creacion',
  component: ComponenteClienteCreacionComponent,
},

{
  path: 'producto-creacion',
  component: ComponenteProductoCreacionComponent,

},

{
  path: 'venta-creacion',
  component: ComponenteVentaCreacionComponent,

},

{
  path: 'cliente-actualizacion',
  component: ClienteActualizarComponent,
},

{
  path: 'cliente-eliminacion',
  component: ClienteEliminarComponent,
},
 { 
  path: 'producto-actualizar',
  component: ProductoActualizarComponent,
},
{
  path: 'venta-actualizar',
  component: VentaActualizarComponent,
},
{
  path: 'venta-eliminar',
  component: ComponenteVentaEliminacionComponent
},
{
  path: 'producto-eliminar',
  component: ComponenteProductoEliminacionComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
