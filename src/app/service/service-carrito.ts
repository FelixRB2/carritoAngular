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
      this.carrito[index].cantidad = cantidad;
    } else if (cantidad > 0) {
      this.carrito.push({ ...producto, cantidad });
    }
  }

  getCarrito(): (InterfaceProducto & { cantidad: number })[] {
    return this.carrito;
  }

  getTotal(): number {
    return this.carrito
      .filter(p => p.cantidad > 0)
      .reduce((sum, p) => sum + Number(p.price) * p.cantidad, 0);
  }

  vaciarCarrito() {
    this.carrito.forEach(p => p.cantidad = 0);
  }
}
