import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { MedicamentoAddComponent } from './modules/medicamento/medicamento-add/medicamento-add.component';
import { MedicamentoDeleteComponent } from './modules/medicamento/medicamento-delete/medicamento-delete.component';
import { MedicamentoEditComponent } from './modules/medicamento/medicamento-edit/medicamento-edit.component';
import { VentaComponent } from './modules/venta/venta.component';
import { VentaMedicamentoComponent } from './modules/venta/venta-medicamento/venta-medicamento.component';
import { MedicamentoComponent } from './modules/medicamento/medicamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MedicamentoAddComponent,
    MedicamentoDeleteComponent,
    MedicamentoEditComponent,
    VentaComponent,
    VentaMedicamentoComponent,
    MedicamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    MatIconModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ToastModule,
    CardModule,
    TooltipModule,
    CalendarModule,
    MatDatepickerModule,
    MenubarModule,
    MatCardModule

  ],
  providers: [
    provideAnimations(),
    provideToastr(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

