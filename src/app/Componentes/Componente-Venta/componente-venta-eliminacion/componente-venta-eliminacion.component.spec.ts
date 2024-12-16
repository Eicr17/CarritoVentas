import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteVentaEliminacionComponent } from './componente-venta-eliminacion.component';

describe('ComponenteVentaEliminacionComponent', () => {
  let component: ComponenteVentaEliminacionComponent;
  let fixture: ComponentFixture<ComponenteVentaEliminacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteVentaEliminacionComponent]
    });
    fixture = TestBed.createComponent(ComponenteVentaEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
