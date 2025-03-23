import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SusersService } from '../../../services/susers.service';
import { Iuser } from '../../../interfaces/iuser.interface';
import { ButtonsComponent } from "../../../shared/buttons/buttons.component";


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css',
  imports: [ButtonsComponent]
})

export class UserViewComponent {
  user!: Iuser;
  userService = inject(SusersService);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //id de la url
    const id = this.route.snapshot.paramMap.get('_id');
    console.log('ID recibido:', id); // ver id recibido de la url 

    if (id) {
      this.userService.getUser(id).subscribe({
        next: (response) => {
          this.user = response;
          console.log(this.user); //usuario correcto?
        },
        error: (err) => {
          console.error('Error al obtener el usuario:', err);
        }
      });
    } else {
      console.error('No se ha proporcionado un ID de usuario válido');
    }
  }
  
  goBack() {
    this.router.navigate(['/home']);
  }
}