import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoAddComponent } from './medicamento-add.component';

describe('MedicamentoAddComponent', () => {
  let component: MedicamentoAddComponent;
  let fixture: ComponentFixture<MedicamentoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentoAddComponent]
    });
    fixture = TestBed.createComponent(MedicamentoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
