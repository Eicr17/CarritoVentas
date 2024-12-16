import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteVentaCreacionComponent } from './componente-venta-creacion.component';

describe('ComponenteVentaCreacionComponent', () => {
  let component: ComponenteVentaCreacionComponent;
  let fixture: ComponentFixture<ComponenteVentaCreacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteVentaCreacionComponent]
    });
    fixture = TestBed.createComponent(ComponenteVentaCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
