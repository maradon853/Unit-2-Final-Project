import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulingPlanetComponent } from './ruling-planet.component';

describe('RulingPlanetComponent', () => {
  let component: RulingPlanetComponent;
  let fixture: ComponentFixture<RulingPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulingPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
