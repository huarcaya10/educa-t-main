import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  productos: Producto[]=[
    {
      id:"2231",
      nombre:"madera1",
      precio:20,
      capacidad:340,
      descripcion:"madera roja gratis",
      imagen:"/assets/imagenes/madera1.jpg"
    },
    {
      id:"2232",
      nombre:"madera2",
      precio:20,
      capacidad:340,
      descripcion:"madera blanca gratis",
      imagen:"/assets/imagenes/madera2.jpg"
    },
    {
      id:"2233",
      nombre:"madera3",
      precio:20,
      capacidad:340,
      descripcion:"madera blanca gratis",
      imagen:"/assets/imagenes/madera3.jpg"
    },
    {
      id:"2234",
      nombre:"madera4",
      precio:20,
      capacidad:340,
      descripcion:"madera blanca gratis",
      imagen:"/assets/imagenes/madera4.jpg"
    },
    {
      id:"2235",
      nombre:"madera5",
      precio:20,
      capacidad:340,
      descripcion:"madera blanca gratis",
      imagen:"/assets/imagenes/madera5.jpg"
    },
    {
      id:"2236",
      nombre:"madera6",
      precio:20,
      capacidad:340,
      descripcion:"madera blanca gratis",
      imagen:"/assets/imagenes/madera6.jpg"
    },

  ];  
  seleccionados: string[]=[];
  constructor() { }


  agregarSeleccion(elemento:string):void{
    this.seleccionados.push(elemento)
  }
}
