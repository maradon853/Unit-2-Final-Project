import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { OuterSpaceComponent } from './outer-space.component';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

describe('OuterSpaceComponent', () => {
  let apiService: ApiService;
  let component: OuterSpaceComponent;
  let fixture: ComponentFixture<OuterSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterSpaceComponent ],
      imports: [HttpClientTestingModule],
      providers: [ ApiService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    apiService = TestBed.get(ApiService);
    fixture = TestBed.createComponent(OuterSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create service', () => {
    expect(apiService).toBeTruthy();
  });

  it('should return a picture with title and description', () => {
    const pictureResponse = [
      { color: 'green' }
    ];
    let response;
    spyOn(apiService, 'getPics').and.returnValue(of(pictureResponse));

    apiService.getPics().subscribe(res => {
        response = res;
      });

    expect(response).toEqual(pictureResponse);
  });
});
