import { Component } from '@angular/core';
import { MdlCliente } from 'src/app/modelos/mdl-cliente.model';
import { SrvClienteService } from 'src/app/Servicios/srv-cliente.service';

@Component({
  selector: 'app-componente-cliente-lista',
  templateUrl: './componente-cliente-lista.component.html',
  styleUrls: ['./componente-cliente-lista.component.css']
})
export class ComponenteClienteListaComponent {
   lstCliente: MdlCliente[] = [];

   constructor(private srvCliente : SrvClienteService){


     this.srvCliente.obtenerClientes().subscribe(
       (response) => {
         this.lstCliente = response.datos;
       },
       (fail:any)=>{
         console.log(fail);
       }
     )

   }

}
