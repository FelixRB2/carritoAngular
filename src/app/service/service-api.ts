import { Injectable } from '@angular/core';
import { InterfaceProducto } from '../interfaces/interface-producto';

@Injectable({
  providedIn: 'root',
})
export class ServiceApi {

  private productos: InterfaceProducto[] = [];
  private currency: string = "";

  constructor() {

    fetch('http://localhost:8080/api/carrito')
      .then(res => res.json())
      .then(data => {

        // Se guarda la moneda
        this.currency = data.currency;

        // Se guarda los productos
        data.products.forEach((producto: InterfaceProducto) => {
          this.productos.push(producto);
        });
      });
  }

  // Obtener los productos
  getAllProducts(): InterfaceProducto[] {
    return this.productos;
  }

  // Obtener la moneda
  getCurrency(): string {
    return this.currency;
  }

  
}

