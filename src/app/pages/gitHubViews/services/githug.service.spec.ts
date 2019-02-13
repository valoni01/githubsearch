import { TestBed } from '@angular/core/testing';

import { GithugService } from './githug.service';

describe('GithugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithugService = TestBed.get(GithugService);
    expect(service).toBeTruthy();
  });
});
