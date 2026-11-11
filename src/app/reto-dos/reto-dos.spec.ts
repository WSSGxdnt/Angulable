import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetoDos } from './reto-dos';

describe('RetoDos', () => {
  let component: RetoDos;
  let fixture: ComponentFixture<RetoDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoDos],
    }).compileComponents();

    fixture = TestBed.createComponent(RetoDos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
