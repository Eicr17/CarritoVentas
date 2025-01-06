import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { SrvProductosService } from 'src/app/Servicios/srv-productos.service';

@Component({
  selector: 'app-producto-actualizar',
  templateUrl: './producto-actualizar.component.html',
  styleUrls: ['./producto-actualizar.component.css']
})
export class ProductoActualizarComponent {

  formProductoAc! : FormGroup

  constructor (private srvProducto : SrvProductosService,
               private formbuilder : FormBuilder
  ){

  }

  ngOnInit(){
    this.formProductoAc = this.formbuilder.group({
      id_producto : ['' ,Validators.required],
      nombre_producto : ['', Validators.required],
      existencia : ['', Validators.required],
      marca : ['', Validators.required],
      precio : ['', Validators.required]
    })
  }

  ProductoActualizar(){
    this.srvProducto.actualizarProducto(
      this.formProductoAc.value
    ).subscribe(
      (response) => {
        if (response.exitosa)
          alert(response.mensaje)
        else("Error" + response.mensaje)
      },
      (fail : any) => {
        console.log(fail)
      }
    )
  }

}
