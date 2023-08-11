import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoDeleteComponent } from './medicamento-delete.component';

describe('MedicamentoDeleteComponent', () => {
  let component: MedicamentoDeleteComponent;
  let fixture: ComponentFixture<MedicamentoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentoDeleteComponent]
    });
    fixture = TestBed.createComponent(MedicamentoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
