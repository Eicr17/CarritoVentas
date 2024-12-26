import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteVentaListaComponent } from './componente-venta-lista.component';

describe('ComponenteVentaListaComponent', () => {
  let component: ComponenteVentaListaComponent;
  let fixture: ComponentFixture<ComponenteVentaListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteVentaListaComponent]
    });
    fixture = TestBed.createComponent(ComponenteVentaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
