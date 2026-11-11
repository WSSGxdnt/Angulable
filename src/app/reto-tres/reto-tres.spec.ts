import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetoTres } from './reto-tres';

describe('RetoTres', () => {
  let component: RetoTres;
  let fixture: ComponentFixture<RetoTres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoTres],
    }).compileComponents();

    fixture = TestBed.createComponent(RetoTres);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
