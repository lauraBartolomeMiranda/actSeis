import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router'


@Component({
  selector: 'app-dashboard-nav',
  imports: [RouterLink],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css'
})
export class DashboardNavComponent {
  router = inject(Router);// inyect el servicio de rutas
}

