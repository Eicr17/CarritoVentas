import { TestBed } from '@angular/core/testing';

import { SrvClienteService } from './srv-cliente.service';

describe('SrvClienteService', () => {
  let service: SrvClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
