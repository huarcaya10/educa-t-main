import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cursos-cortos',
  templateUrl: './cursos-cortos.component.html',
  styleUrls: ['./cursos-cortos.component.scss']
})
export class CursosCortosComponent implements OnInit {

  productos: Producto[]=[
  

  ];  
  constructor(private storeService:StoreService) {
    this.productos=storeService.productos;
  }

  ngOnInit(): void {
  }

}
