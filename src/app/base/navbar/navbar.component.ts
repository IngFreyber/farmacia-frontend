import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items!: MenuItem[];

  constructor() {
    this.items = [
      { label: 'Medicamentos', icon: 'pi pi-box', url: '/medicamentos', target: "_self" },
      { label: 'Ventas', icon: 'pi pi-tags', url: '/ventas', target: "_self" }
    ]
  }

}
