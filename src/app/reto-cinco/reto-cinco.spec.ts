import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetoCinco } from './reto-cinco';

describe('RetoCinco', () => {
  let component: RetoCinco;
  let fixture: ComponentFixture<RetoCinco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoCinco],
    }).compileComponents();

    fixture = TestBed.createComponent(RetoCinco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
