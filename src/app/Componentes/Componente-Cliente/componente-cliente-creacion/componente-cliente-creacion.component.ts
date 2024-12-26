import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MdlClienteCreacion } from 'src/app/modelos/mdl-cliente-creacion.model';
import { MdlCliente } from 'src/app/modelos/mdl-cliente.model';
import { SrvClienteService } from 'src/app/Servicios/srv-cliente.service';

@Component({
  selector: 'app-componente-cliente-creacion',
  templateUrl: './componente-cliente-creacion.component.html',
  styleUrls: ['./componente-cliente-creacion.component.css']
})
export class ComponenteClienteCreacionComponent {
lstClientes : MdlCliente[] = [];
public formClientes! : FormGroup

constructor(private srvClientes: SrvClienteService,
  private formBuilider : FormBuilder){



}
}
