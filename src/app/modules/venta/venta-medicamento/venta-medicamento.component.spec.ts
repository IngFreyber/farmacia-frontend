import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaMedicamentoComponent } from './venta-medicamento.component';

describe('VentaMedicamentoComponent', () => {
  let component: VentaMedicamentoComponent;
  let fixture: ComponentFixture<VentaMedicamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaMedicamentoComponent]
    });
    fixture = TestBed.createComponent(VentaMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
