import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicamentoService } from 'src/app/core/service/medicamento.service';
import { DialogService } from 'src/app/core/service/dialog.service';


@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.scss']
})
export class MedicamentoComponent implements OnInit{

  products: any;
  formMedicamento!: FormGroup;

  constructor(
    private medicamentoService: MedicamentoService,
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {

    this.formMedicamento = this.formBuilder.group({
      nombre: [''],
    })

    this.listMedicamentos();

    this.formMedicamento.get('nombre')?.valueChanges.subscribe((data) => {

      if (data != null && data != '' && data) {
        this.filterByNombre(data);
      } else {
        this.listMedicamentos();
      }
    })
  }

  filterByNombre(data: string) {
    this.medicamentoService.filterNombre('api/medicamento/listarNombre', data).subscribe((data:any) => {
      this.products = data;
    })
  }

  listMedicamentos() {
    this.medicamentoService.get('api/medicamento/listar')
      .subscribe((res:any) => {
        this.products = res;
      })
  }

  saveMedicamentoDialog() {
    this.dialogService
      .saveMedicamentoDialog()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  deleteMedicamentoDialog(data: any) {
    this.dialogService
      .deleteMedicamentoDialog(data)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  editMedicamentoDialog(data: any) {
    this.dialogService
      .editMedicamentoDialog(data)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  sellMedicamentoDialog(data: any) {
    this.dialogService
      .sellMedicamentoDialog(data)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
