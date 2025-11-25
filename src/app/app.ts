import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteCarrito } from "./components/componente-carrito/componente-carrito";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteCarrito],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('carritoAngular');
}
