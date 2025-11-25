import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProducto } from './componente-producto';

describe('ComponenteProducto', () => {
  let component: ComponenteProducto;
  let fixture: ComponentFixture<ComponenteProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
