import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteClienteListaComponent } from './componente-cliente-lista.component';

describe('ComponenteClienteListaComponent', () => {
  let component: ComponenteClienteListaComponent;
  let fixture: ComponentFixture<ComponenteClienteListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteClienteListaComponent]
    });
    fixture = TestBed.createComponent(ComponenteClienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
