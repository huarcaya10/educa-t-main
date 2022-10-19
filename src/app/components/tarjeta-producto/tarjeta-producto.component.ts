import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent implements OnInit {
  @Input() producto: Producto= {
    id: "",
    capacidad: 0,
    precio:0,
    descripcion: "",
    imagen: "",
    nombre: ""    
  };
  @Output() pressAgregar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickAgregar(id:string):void{
    console.log("se ha presionado agregar");
    this.pressAgregar.emit(id);

  }
}
