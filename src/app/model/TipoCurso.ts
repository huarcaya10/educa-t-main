import { Producto } from "./producto";


export interface TipoCurso {
    id: string;
    nombre: string;
    productos: Producto[];
}
