import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MdlCliente } from 'src/app/modelos/mdl-cliente.model';
import { MdlVentasCreacion } from 'src/app/modelos/mdl-ventas-creacion.model';
import { SrvVentasService } from 'src/app/Servicios/srv-ventas.service';

@Component({
  selector: 'app-componente-venta-creacion',
  templateUrl: './componente-venta-creacion.component.html',
  styleUrls: ['./componente-venta-creacion.component.css']
})
export class ComponenteVentaCreacionComponent {
lstVenta! : MdlVentasCreacion[];
public formVenta! : FormGroup

constructor( private srvVentasLista : SrvVentasService, private FormBuilder: FormBuilder){
}

ngOnInit(){
  this.formVenta = this.FormBuilder.group({
    id_producto : ['', Validators.required],
    id_cliente : ['', Validators.required],
    establecimiento : ['', Validators.required],
    precio : ['', Validators.required],
    cantidad_producto : ['',Validators.required],
    descuento : ['', Validators.required],
    existencia : ['', Validators.required]
  })
}

GrabarVentas(){
  this.srvVentasLista.CrearVentas(
    this.formVenta.value
  ).subscribe(
    (response) => {
      if (response.codigooperacion == 0)
        alert("Venta creada exitosamente")
    },
    (fail : any) =>{
      console.log(fail)
    }
  )

}



}
