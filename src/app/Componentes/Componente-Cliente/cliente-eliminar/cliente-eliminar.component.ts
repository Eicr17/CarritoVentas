import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SrvClienteService } from 'src/app/Servicios/srv-cliente.service';

@Component({
  selector: 'app-cliente-eliminar',
  templateUrl: './cliente-eliminar.component.html',
  styleUrls: ['./cliente-eliminar.component.css']
})
export class ClienteEliminarComponent {

  public formClienteEliminar! : FormGroup

  constructor(private srvCliente : SrvClienteService,
    private formbuilder : FormBuilder
  ){

  }

  ngOnInit(){
    this.formClienteEliminar = this.formbuilder.group({
      id_cliente : ['', Validators.required]
    })
  }

  EliminacionCliente(){
    this.srvCliente.eliminarCliente(
      this.formClienteEliminar.controls['id_cliente'].value
    ).subscribe(
      (response) => {
        if(response.exitosa)
          alert(response.mensaje)
        else("Error" + response.mensaje)
      },
      (fail : any) => {
        console.log(fail)
      }
    )
  }

}
