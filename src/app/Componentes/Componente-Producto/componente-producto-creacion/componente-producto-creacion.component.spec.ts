import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProductoCreacionComponent } from './componente-producto-creacion.component';

describe('ComponenteProductoCreacionComponent', () => {
  let component: ComponenteProductoCreacionComponent;
  let fixture: ComponentFixture<ComponenteProductoCreacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteProductoCreacionComponent]
    });
    fixture = TestBed.createComponent(ComponenteProductoCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
