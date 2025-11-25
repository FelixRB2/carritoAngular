import { Component, inject, OnInit } from '@angular/core';
import { InterfaceProducto } from '../../interfaces/interface-producto';
import { ServiceApi } from '../../service/service-api';
import { ServiceCarrito } from '../../service/service-carrito';
import { ComponenteProducto } from '../componente-producto/componente-producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-carrito',
  templateUrl: './componente-carrito.html',
  styleUrls: ['./componente-carrito.css'],
  imports: [FormsModule, ComponenteProducto],
})
export class ComponenteCarrito implements OnInit {

  arrayCarrito: InterfaceProducto[] = [];
  ServiceApi = inject(ServiceApi);
  CarritoService = inject(ServiceCarrito);

  ngOnInit(): void {
    this.arrayCarrito = this.ServiceApi.getAllProducts();
  }

  // propiedad para iterar en el @for
  get productosEnCarrito() {
    return this.CarritoService.getCarrito();
  }

  get totalCarrito() {
  return this.CarritoService.getCarrito()
    .reduce((sum, p) => sum + parseFloat(p.price) * p.cantidad, 0);
}

precioNumero(producto: InterfaceProducto): number {
  return parseFloat(producto.price);
}



  vaciarCarrito() {
    this.CarritoService.vaciarCarrito();
  }
}
