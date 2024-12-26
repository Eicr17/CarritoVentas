import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  NgOnInit(){
    this.formClientes = this.formBuilider.group({
      nombres : ['', Validators.required],
      apellidos : ['', Validators.required],
      dpi : ['', Validators.required],
      telefono : ['', Validators.required],
    })
  }
  GrabarCliente(){
    this.srvClientes.CrearCliente(
      this.formClientes.value
    ).subscribe(
      (response) => {
        if (response.codigooperacion == 0)
          alert("Cliente creado exitosamente")
      },
      (fail : any) =>{
        console.log(fail);
      }
    )
  }
}
