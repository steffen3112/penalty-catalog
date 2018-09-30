import { HttpClient, HttpBackend } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { PenaltyService } from './penalty.service';

describe('PenaltyService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let penaltyService: PenaltyService;

  beforeEach(() => {
  
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PenaltyService]
    });
    
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    penaltyService = new PenaltyService(httpClient);
    
  });

  it('exists', inject([PenaltyService], (service: PenaltyService) => {
    expect(service).toBeTruthy();
  }));

  //TODO: Configure further test

});
