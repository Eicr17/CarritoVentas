import { TestBed } from '@angular/core/testing';

import { SrvClienteCreacionService } from './srv-cliente-creacion.service';

describe('SrvClienteCreacionService', () => {
  let service: SrvClienteCreacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvClienteCreacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
