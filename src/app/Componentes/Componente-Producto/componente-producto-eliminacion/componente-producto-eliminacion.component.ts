import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SrvProductosService } from 'src/app/Servicios/srv-productos.service';

@Component({
  selector: 'app-componente-producto-eliminacion',
  templateUrl: './componente-producto-eliminacion.component.html',
  styleUrls: ['./componente-producto-eliminacion.component.css']
})
export class ComponenteProductoEliminacionComponent {
  formProductoEliminar! : FormGroup

  constructor(private srvProducto : SrvProductosService,
              private formbuilder : FormBuilder
  ){

  }

  ngOnInit(){
    this.formProductoEliminar = this.formbuilder.group({
      id_producto : ['', Validators.required]
    })
  }
  ProductoEliminar(){
    this.srvProducto.eliminarProducto(
      this.formProductoEliminar.controls['id_producto'].value
    ).subscribe(
      (response) => {
        console.log(response);
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
