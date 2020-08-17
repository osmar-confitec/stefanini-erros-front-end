import { TestBed } from '@angular/core/testing';

import { ServiceRequisicaoService } from './service-requisicao.service';

describe('ServiceRequisicaoService', () => {
  let service: ServiceRequisicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRequisicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
