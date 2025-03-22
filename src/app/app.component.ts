import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardNavComponent } from './shared/dashboard-nav/dashboard-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actSeis';
}
