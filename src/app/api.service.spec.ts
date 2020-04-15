import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { get } from "http";

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ApiService]
  });
  service = TestBed.get(ApiService);
  httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  //tests if ApiService call contains NASA URL
  it("checks API URL", () => {
    let service: ApiService;
    expect(get).toContain(service);
  });

  //tests getPics() 
  it('be able to retrieve posts from the API via GET', () => {
    const dummyPics = [{
        picture: 'NASA'
    }];
    service.getPics().subscribe(pics => {
        expect(pics).toEqual(dummyPics);
    });
    const request = httpMock.expectOne(service.url);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPics);
  });
});

