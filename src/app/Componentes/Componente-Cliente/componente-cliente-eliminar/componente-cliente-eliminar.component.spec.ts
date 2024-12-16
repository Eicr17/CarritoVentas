import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteClienteEliminarComponent } from './componente-cliente-eliminar.component';

describe('ComponenteClienteEliminarComponent', () => {
  let component: ComponenteClienteEliminarComponent;
  let fixture: ComponentFixture<ComponenteClienteEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteClienteEliminarComponent]
    });
    fixture = TestBed.createComponent(ComponenteClienteEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
