import { Component, Input } from '@angular/core';
import { Iuser } from '../../interfaces/iuser.interface';
import { Router } from '@angular/router';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-card-user',
  imports: [ButtonsComponent],
  standalone: true,
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.css'
})
export class CardUserComponent {
  @Input() user!: Iuser; // recibe datos del usuario como entrada

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/dashboard/user', this.user._id]);
  }

  editUser() {
    this.router.navigate(['/dashboard/updateuser', this.user.id]);
  }

  deleteUser() {
    if (confirm(`¿Seguro que quieres eliminar a ${this.user.first_name}?`)) {
      console.log(`Eliminar usuario con ID: ${this.user.id}`);
      
    }
  }
}
