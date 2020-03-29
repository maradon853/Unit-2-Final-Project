import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterSpaceComponent } from './outer-space.component';

describe('OuterSpaceComponent', () => {
  let component: OuterSpaceComponent;
  let fixture: ComponentFixture<OuterSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
