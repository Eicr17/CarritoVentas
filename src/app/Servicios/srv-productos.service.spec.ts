import { TestBed } from '@angular/core/testing';

import { SrvProductosService } from './srv-productos.service';

describe('SrvProductosService', () => {
  let service: SrvProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
