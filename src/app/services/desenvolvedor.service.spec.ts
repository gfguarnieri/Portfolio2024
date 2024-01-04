import { TestBed } from '@angular/core/testing';

import { DesenvolvedorService } from './desenvolvedor.service';

describe('DesenvolvedorService', () => {
  let service: DesenvolvedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesenvolvedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
