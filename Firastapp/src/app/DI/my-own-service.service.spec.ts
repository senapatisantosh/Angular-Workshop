import { TestBed } from '@angular/core/testing';

import { MyOwnServiceService } from './my-own-service.service';

describe('MyOwnServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyOwnServiceService = TestBed.get(MyOwnServiceService);
    expect(service).toBeTruthy();
  });
});
