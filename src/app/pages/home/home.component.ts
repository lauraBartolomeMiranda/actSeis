import { Component, inject } from '@angular/core';
import { SusersService } from '../../services/susers.service';
import { Iuser } from '../../interfaces/iuser.interface';
import { CardUserComponent } from '../../shared/card-user/card-user.component';
import { lastValueFrom  } from 'rxjs';


@Component({
  selector: 'app-home',
  imports: [CardUserComponent],
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  users: Iuser[] = [];
  userService = inject(SusersService); // Inyectamos el servicio

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  async cargarUsuarios() {
    try {
        const response = await lastValueFrom(this.userService.getUsers());
        this.users = response.results; // Asignamos la lista de usuarios
    } catch (error) {
        console.error("Error cargando usuarios", error);
    }
}
 
}





