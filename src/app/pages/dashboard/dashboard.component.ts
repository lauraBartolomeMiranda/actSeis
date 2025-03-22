import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importar RouterOutlet correctamente


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet], //barra de navegación   ??
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent {}




/*import { Component } from '@angular/core';
import { DashboardNavComponent } from "../../shared/dashboard-nav/dashboard-nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardNavComponent, RouterOutlet],//barra de navegación    !!!// Solo es necesario RouterOutlet, no necesitas DashboardNavComponent aquí
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
//barra de navegacion (DashboardNavComponent)
  //Muestra las vistas internas con <router-outlet>.
}*/