import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignsComponent } from './signs.component';

describe('SignsComponent', () => {
  let component: SignsComponent;
  let fixture: ComponentFixture<SignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignsComponent ]
  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display a list of signs`, () => {
    expect(component.signs.length).toEqual(12);
  });

  it('should set sign spans to light blue', () => {
    //const fixture = TestBed.createComponent(AppComponent);
    //fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li').backgroundcolor).toBe('lightblue');
  });
});
