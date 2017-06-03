import { TestBed, inject } from '@angular/core/testing';

import { GetNewsService } from './get-news.service';

describe('GetNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNewsService]
    });
  });

  it('should be created', inject([GetNewsService], (service: GetNewsService) => {
    expect(service).toBeTruthy();
  }));
});
