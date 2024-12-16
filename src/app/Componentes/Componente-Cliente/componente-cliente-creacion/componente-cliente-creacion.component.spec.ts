import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteClienteCreacionComponent } from './componente-cliente-creacion.component';

describe('ComponenteClienteCreacionComponent', () => {
  let component: ComponenteClienteCreacionComponent;
  let fixture: ComponentFixture<ComponenteClienteCreacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteClienteCreacionComponent]
    });
    fixture = TestBed.createComponent(ComponenteClienteCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
