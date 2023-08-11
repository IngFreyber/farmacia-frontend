import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoEditComponent } from './medicamento-edit.component';

describe('MedicamentoEditComponent', () => {
  let component: MedicamentoEditComponent;
  let fixture: ComponentFixture<MedicamentoEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentoEditComponent]
    });
    fixture = TestBed.createComponent(MedicamentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
