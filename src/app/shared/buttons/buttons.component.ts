
import { Component, Input } from '@angular/core';
import { Iuser } from '../../interfaces/iuser.interface';
import { Router, RouterLink} from '@angular/router';
import { SusersService } from '../../services/susers.service';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() user!: Iuser; // recibe usuario como entrada
  @Input() mostrarVolver: boolean = false; // controla si se muestra  "volver al listado"

  
  showToast: boolean = false; // control de visibilidad del toast
  toastMessage: string = ''; // mensaje del toast



  constructor(private router: Router, private suserService: SusersService) {}

  viewDetails() {
    this.router.navigate(['/dashboard/user', this.user._id]);
  }

  editUser() {
    this.router.navigate(['/dashboard/updateuser', this.user._id]);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  deleteUser() {
    this.showToast = true;
    this.toastMessage = `¿Seguro que quieres eliminar a ${this.user.first_name}?`;
  }

  confirmDelete() {
    this.suserService.deleteUser(this.user._id).subscribe(() => {
      this.showToast = false;
      this.router.navigate(['/dashboard/users']); //vuelve a lista de usuarios
    });
  }

  cancelDelete() {
    this.showToast = false;
    this.router.navigate(['/home']); //vuelve a home
  }
  

  
}