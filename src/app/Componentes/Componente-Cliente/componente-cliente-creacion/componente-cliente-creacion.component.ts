import { Component } from '@angular/core';
import { MdlClienteCreacion } from 'src/app/modelos/mdl-cliente-creacion.model';
import { SrvClienteCreacionService } from 'src/app/Servicios/srv-cliente-creacion.service';

@Component({
  selector: 'app-componente-cliente-creacion',
  templateUrl: './componente-cliente-creacion.component.html',
  styleUrls: ['./componente-cliente-creacion.component.css']
})
export class ComponenteClienteCreacionComponent {
  lstProducto! : MdlClienteCreacion[];
  nombre! : string;
  apellido! : string;
  dpi! : string;
  telefono! : string;
  totalventas!: number;
  constructor(
   
    private _srvClienteCreacion : SrvClienteCreacionService
  
  ){


  }

  CrearEstudiante(){
    this._srvClienteCreacion.post({
    nombre:  this.nombre,
    apellido: this.apellido,
    dpi: this.dpi,
    telefono: this.telefono,
    totalventas: this.totalventas
    }
    ).subscribe(
    (resp) =>{
      let Respuesta : string  = "";
      Respuesta  = resp.message;
    },
    (fail:any)=>{
      console.log(fail);
      alert(fail)
    }
    )
  
    }
}
