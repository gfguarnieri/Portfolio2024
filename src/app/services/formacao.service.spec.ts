import { TestBed } from '@angular/core/testing';

import { FormacaoService } from './formacao.service';

describe('FormacaoService', () => {
  let service: FormacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
