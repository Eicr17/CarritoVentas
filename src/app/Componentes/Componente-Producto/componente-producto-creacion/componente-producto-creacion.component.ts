import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdlProductoCrear } from 'src/app/modelos/mdl-producto-creacion.model';
import { SrvProductosService } from 'src/app/Servicios/srv-productos.service';

@Component({
  selector: 'app-componente-producto-creacion',
  templateUrl: './componente-producto-creacion.component.html',
  styleUrls: ['./componente-producto-creacion.component.css']
})
export class ComponenteProductoCreacionComponent {
lstProducto!  : MdlProductoCrear[];
public formProductos! : FormGroup

constructor( private  srvProductoCreacion : SrvProductosService, 
            private formbuilder : FormBuilder)
{

}

ngOnInit(){
  this.formProductos = this.formbuilder.group({
    nombre_producto : ['', Validators.required],
    marca : ['', Validators.required],
    precio : ['', Validators.required],
    existencia : ['', Validators.required]
  })
}

GrabarProducto(){
this.srvProductoCreacion.CrearProducto(
  this.formProductos.value
).subscribe(
  (response) => {
    if(response.exitosa)
      alert(response.mensaje)
    else
    ("Error: " + response.mensaje)
  },
  (fail : any) => {
    console.log(fail)
  }
)
}
}
