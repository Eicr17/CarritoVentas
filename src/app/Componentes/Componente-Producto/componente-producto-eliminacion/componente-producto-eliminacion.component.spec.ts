import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProductoEliminacionComponent } from './componente-producto-eliminacion.component';

describe('ComponenteProductoEliminacionComponent', () => {
  let component: ComponenteProductoEliminacionComponent;
  let fixture: ComponentFixture<ComponenteProductoEliminacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteProductoEliminacionComponent]
    });
    fixture = TestBed.createComponent(ComponenteProductoEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
