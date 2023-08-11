import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentoComponent } from './modules/medicamento/medicamento.component';
import { VentaComponent } from './modules/venta/venta.component';

const routes: Routes = [
  {
    path: 'medicamentos',
    component: MedicamentoComponent
  },
  {
    path: 'ventas',
    component: VentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
