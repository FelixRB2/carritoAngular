import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCarrito } from './componente-carrito';

describe('ComponenteCarrito', () => {
  let component: ComponenteCarrito;
  let fixture: ComponentFixture<ComponenteCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCarrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCarrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
