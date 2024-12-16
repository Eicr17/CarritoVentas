import { TestBed } from '@angular/core/testing';

import { SrvVentasCreacionService } from './srv-ventas-creacion.service';

describe('SrvVentasCreacionService', () => {
  let service: SrvVentasCreacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvVentasCreacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
