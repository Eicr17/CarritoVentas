import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProductoListaComponent } from './componente-producto-lista.component';

describe('ComponenteProductoListaComponent', () => {
  let component: ComponenteProductoListaComponent;
  let fixture: ComponentFixture<ComponenteProductoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteProductoListaComponent]
    });
    fixture = TestBed.createComponent(ComponenteProductoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
