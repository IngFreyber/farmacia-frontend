import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MedicamentoService } from 'src/app/core/service/medicamento.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-medicamento-add',
  templateUrl: './medicamento-add.component.html',
  styleUrls: ['./medicamento-add.component.scss']
})
export class MedicamentoAddComponent  implements OnInit{

  formAddMedicamento!: FormGroup;
  mensajeError = null;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MedicamentoAddComponent>,
    private medicamentoService: MedicamentoService,
    private toasterService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.formAddMedicamento = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      laboratorioFabrica: ['', [Validators.required]],
      fechaFabricacion: ['', [Validators.required]],
      fechaVencimiento: ['', [Validators.required]],
      cantidadStock: ['', [Validators.required, , Validators.pattern(/^[1-9]\d*$/)]],
      valorUnitario: ['', [Validators.required]],
    });
  }

  get form() {
    return this.formAddMedicamento.controls;
  }

  onFormSubmit() {
    if (navigator.onLine) {
      this.mensajeError = null;
      const newMedicamento = Object.assign(
        {},
        this.formAddMedicamento.value
      );
      this.medicamentoService.save('api/medicamento/crear', newMedicamento).subscribe({
        next: (medicamento:any) => {
          this.dialogRef.close(medicamento);
          this.toasterService.success('medicamento guardado exitosamente')
        },
        error: (error:any) => {
          try {
            for (let field of error) {
              this.toasterService.error(field.message, 'Error');
            }
          } catch (e) {
            this.mensajeError = error.message;
          }
        },
      });
    } else {
      this.toasterService.error(
        'Por favor, revisa tu conexión a internet',
        'Error'
      );
    }
  }
}
