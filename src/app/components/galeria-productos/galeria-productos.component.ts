import { Component, Input, OnInit } from '@angular/core';
import { Producto} from 'src/app/model/producto';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-galeria-productos',
  templateUrl: './galeria-productos.component.html',
  styleUrls: ['./galeria-productos.component.scss']
})
export class GaleriaProductosComponent implements OnInit {

  @Input() elementos: Producto[] =[];
  seleccionados: string[]= [];
  //seleccionados: number=0;



  constructor(private storeService:StoreService) { 
    this.seleccionados=storeService.seleccionados;
  }

  ngOnInit(): void {
  }

  seleccionar(id:string):void{
  //  this.seleccionados++;
  this.storeService.agregarSeleccion(id);
  console.log(this.seleccionados);
  }

}
