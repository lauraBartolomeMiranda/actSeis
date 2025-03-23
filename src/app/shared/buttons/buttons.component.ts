import { Component, Input } from '@angular/core';
import { Iuser } from '../../interfaces/iuser.interface';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() user!: Iuser; // recibe usuario como entrada
  @Input() mostrarVolver: boolean = false; // controla si se muestra  "volver al listado"

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/dashboard/user', this.user._id]);
  }

  editUser() {
    this.router.navigate(['/dashboard/updateuser', this.user._id]);
  }

  deleteUser() {
    if (confirm(`¿Seguro que quieres eliminar a ${this.user.first_name}?`)) {
      console.log(`Eliminar usuario con ID: ${this.user._id}`);
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
