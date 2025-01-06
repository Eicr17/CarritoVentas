import { Component } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { SrvClienteService } from 'src/app/Servicios/srv-cliente.service';

@Component({
  selector: 'app-cliente-actualizar',
  templateUrl: './cliente-actualizar.component.html',
  styleUrls: ['./cliente-actualizar.component.css']
})
export class ClienteActualizarComponent {

public formClienteActualizar! : FormGroup

constructor( private srvCliente : SrvClienteService, 
  private formbuilder : FormBuilder){

  }

  ngOnInit(){
    this.formClienteActualizar = this.formbuilder.group({
      id_cliente : ['', Validators.required],
      nombre : ['',Validators.required],
      apellido : ['', Validators.required],
      dpi : ['', Validators.required],
      telefono : ['', Validators.required],

    })
  }
  ActualizarClientes(){
    this.srvCliente.actualizarCliente(
      this.formClienteActualizar.value
    ).subscribe(
      (response) => {
        if (response.exitosa)
          alert(response.mensaje)
        else("Error" + response.mensaje)
      },
      (fail : any) => {
        console.log(fail);
      }
    )
  }

}
