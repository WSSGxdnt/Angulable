import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetoUno } from './reto-uno';

describe('RetoUno', () => {
  let component: RetoUno;
  let fixture: ComponentFixture<RetoUno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoUno],
    }).compileComponents();

    fixture = TestBed.createComponent(RetoUno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
