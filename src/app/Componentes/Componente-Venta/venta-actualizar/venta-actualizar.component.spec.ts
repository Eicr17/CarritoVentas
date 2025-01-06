import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaActualizarComponent } from './venta-actualizar.component';

describe('VentaActualizarComponent', () => {
  let component: VentaActualizarComponent;
  let fixture: ComponentFixture<VentaActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaActualizarComponent]
    });
    fixture = TestBed.createComponent(VentaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
