import { TestBed } from '@angular/core/testing';

import { ServicedatosService } from './servicedatos.service';

describe('ServicedatosService', () => {
  let service: ServicedatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
