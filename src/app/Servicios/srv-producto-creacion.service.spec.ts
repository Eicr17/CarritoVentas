import { TestBed } from '@angular/core/testing';

import { SrvProductoCreacionService } from './srv-producto-creacion.service';

describe('SrvProductoCreacionService', () => {
  let service: SrvProductoCreacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvProductoCreacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
