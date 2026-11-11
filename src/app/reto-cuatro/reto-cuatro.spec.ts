import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetoCuatro } from './reto-cuatro';

describe('RetoCuatro', () => {
  let component: RetoCuatro;
  let fixture: ComponentFixture<RetoCuatro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoCuatro],
    }).compileComponents();

    fixture = TestBed.createComponent(RetoCuatro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
