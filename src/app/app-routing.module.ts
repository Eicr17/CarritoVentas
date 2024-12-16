import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteClienteListaComponent } from './Componentes/Componente-Cliente/componente-cliente-lista/componente-cliente-lista.component';
import { ComponenteProductoListaComponent } from './Componentes/Componente-Producto/componente-producto-lista/componente-producto-lista.component';
import { ComponenteVentaListaComponent } from './Componentes/Componente-Venta/componente-venta-lista/componente-venta-lista.component';
import { ComponenteClienteCreacionComponent } from './Componentes/Componente-Cliente/componente-cliente-creacion/componente-cliente-creacion.component';
import { ComponenteProductoCreacionComponent } from './Componentes/Componente-Producto/componente-producto-creacion/componente-producto-creacion.component';
import { ComponenteVentaCreacionComponent } from './Componentes/Componente-Venta/componente-venta-creacion/componente-venta-creacion.component';

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

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
