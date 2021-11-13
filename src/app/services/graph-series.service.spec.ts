import { TestBed } from '@angular/core/testing';

import { GraphSeriesService } from './graph-series.service';

describe('GraphSeriesService', () => {
  let service: GraphSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
