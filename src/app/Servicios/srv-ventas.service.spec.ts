import { TestBed } from '@angular/core/testing';

import { SrvVentasService } from './srv-ventas.service';

describe('SrvVentasService', () => {
  let service: SrvVentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvVentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
