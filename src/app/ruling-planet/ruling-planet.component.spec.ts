import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RulingPlanetComponent } from './ruling-planet.component';

describe('RulingPlanetComponent', () => {
  let component: RulingPlanetComponent;
  let fixture: ComponentFixture<RulingPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulingPlanetComponent ],
      imports: [FormsModule,
        ReactiveFormsModule,]
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

  it(`should have as title 'ruling-planet'`, () => {
    expect(component.title).toEqual('ruling-planet');
  });

  it('should create a FormGroup comprised of FormControl', () => {
    component.ngOnInit();
    expect(component.form instanceof FormGroup).toBe(true);
    expect(Object.keys(component.form.controls).length).toEqual(1);
    expect(Object.keys(component.form.controls)).toEqual([
      'sign'
    ]);
});

it('should return false if the form control is not valid', () => {
  component.ngOnInit();
  expect(component.form.valid).toBe(false);
});

it('should return true if the form control is valid', () => {
  component.ngOnInit();
  component.form.controls['sign'].setValue('aries');
  expect(component.form.valid).toBe(true);

  component.onSubmit();
  expect(component.submitted).toBe(true);
});

describe('invalid form', () => {

  it('should return false if the form control is invalid', () => {
    component.ngOnInit();
    component.form.controls['sign'].setValue('');
    expect(component.form.valid).toBe(false);
    component.onSubmit();
    expect(component.submitted).toBe(true);
  });
  });
});
