import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteVentaLitaComponent } from './componente-venta-lista.component';

describe('ComponenteVentaListaComponent', () => {
  let component: ComponenteVentaLitaComponent;
  let fixture: ComponentFixture<ComponenteVentaLitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteVentaLitaComponent]
    });
    fixture = TestBed.createComponent(ComponenteVentaLitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
