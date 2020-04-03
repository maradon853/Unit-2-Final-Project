import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RullingPlanetComponent } from './rulling-planet.component';

describe('RullingPlanetComponent', () => {
  let component: RullingPlanetComponent;
  let fixture: ComponentFixture<RullingPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RullingPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RullingPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
