import { Injectable } from '@angular/core';
import { InterfaceProducto } from '../interfaces/interface-producto';

@Injectable({
  providedIn: 'root',
})
export class ServiceCarrito {

  private carrito: (InterfaceProducto & { cantidad: number })[] = [];

  constructor() {}

  actualizarCantidad(producto: InterfaceProducto, cantidad: number) {
    const index = this.carrito.findIndex(p => p.sku === producto.sku);

    if (index !== -1) {
      if (cantidad > 0) {
        this.carrito[index].cantidad = cantidad;
      } else {
        // Si la cantidad llega a 0 eliminamos el producto del carrito
        this.carrito.splice(index, 1);
      }
    } else if (cantidad > 0) {
      this.carrito.push({ ...producto, cantidad });
    }
  }

  getCarrito(): (InterfaceProducto & { cantidad: number })[] {
    return this.carrito;
  }

  getTotal(): number {
    return this.carrito.reduce((sum, p) => sum + Number(p.price) * p.cantidad, 0);
  }

  eliminarProducto(producto: any) {
  this.carrito = this.carrito.filter(p => p.sku !== producto.sku);
}

}

