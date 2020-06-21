import { TestBed } from '@angular/core/testing';

import { TruequelibreUiService } from './truequelibre-ui.service';

describe('TruequelibreUiService', () => {
  let service: TruequelibreUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruequelibreUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
