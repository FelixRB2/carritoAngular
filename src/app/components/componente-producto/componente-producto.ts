import { Component, inject, Input } from '@angular/core';
import { InterfaceProducto } from '../../interfaces/interface-producto';
import { ServiceCarrito } from '../../service/service-carrito';

@Component({
  selector: 'app-componente-producto',
  templateUrl: './componente-producto.html',
  styleUrls: ['./componente-producto.css'],
})
export class ComponenteProducto {

  @Input() miProducto!: InterfaceProducto;
  CarritoService = inject(ServiceCarrito);
  cantidad: number = 0; // cantidad local en el componente

  sumarCantidad() {
    this.cantidad++;
    this.CarritoService.actualizarCantidad(this.miProducto, this.cantidad);
  }

  restarCantidad() {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.CarritoService.actualizarCantidad(this.miProducto, this.cantidad);
    }
  }

  get total() {
    return this.cantidad * Number(this.miProducto.price);
  }
}
