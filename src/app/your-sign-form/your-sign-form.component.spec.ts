import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourSignFormComponent } from './your-sign-form.component';

describe('YourSignFormComponent', () => {
  let component: YourSignFormComponent;
  let fixture: ComponentFixture<YourSignFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourSignFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourSignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
