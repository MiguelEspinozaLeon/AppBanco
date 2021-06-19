import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperturaCuentaComponent } from './apertura-cuenta.component';

describe('AperturaCuentaComponent', () => {
  let component: AperturaCuentaComponent;
  let fixture: ComponentFixture<AperturaCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperturaCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AperturaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
