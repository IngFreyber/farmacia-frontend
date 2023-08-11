import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VentaService } from 'src/app/core/service/venta.service';

@Component({
  selector: 'app-venta-medicamento',
  templateUrl: './venta-medicamento.component.html',
  styleUrls: ['./venta-medicamento.component.scss']
})
export class VentaMedicamentoComponent {

  formAddVentaMedicamento!: FormGroup;
  mensajeError = null;
  dataVentaMedicamento: any;
  precioTotalMedicamento: any = 0;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<VentaMedicamentoComponent>,
    private ventaService: VentaService,
    private toasterService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataVentaMedicamento = data.data
  }

  ngOnInit(): void {
    this.formAddVentaMedicamento = this.formBuilder.group({
      cantidad: ['', [Validators.required]],
    });
    this.formAddVentaMedicamento.get('cantidad')?.valueChanges.subscribe((data: any) => {
      this.ventaMedicamentoTotal(data);
    })
  }

  ventaMedicamentoTotal(data: any) {
    this.precioTotalMedicamento = data * this.dataVentaMedicamento.valorUnitario;
  }

  get form() {
    return this.formAddVentaMedicamento.controls;
  }

  onFormSubmit() {
    if (navigator.onLine) {
      this.mensajeError = null;
      const newVenta = Object.assign(
        {},
        this.formAddVentaMedicamento.getRawValue()
      );

      let ventaData = {
        idMedicamento: this.dataVentaMedicamento.id,
        nombreMedicamento: this.dataVentaMedicamento.nombre,
        valorUnitario: this.dataVentaMedicamento.valorUnitario,
        fecha: null,
        cantidad: newVenta.cantidad,
        valorTotal: this.precioTotalMedicamento
      }

      this.ventaService.sale('api/venta/crear', this.dataVentaMedicamento.id, ventaData)
        .subscribe({
          next: (venta:any) => {
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
      this.dialogRef.close();
      this.toasterService.success('Venta creada exitosamente');

    } else {
      this.toasterService.error(
        'Por favor, revisa tu conexión a internet',
        'Error'
      );
    }
  }
}
