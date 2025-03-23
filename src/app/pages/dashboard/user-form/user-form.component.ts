import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../../../interfaces/iuser.interface';
import { SusersService } from '../../../services/susers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent  implements OnInit { 

  userId: string | null = null; // iD del usuario (si estamos en edición)
  userForm: FormGroup = new FormGroup({}, []); // reactivo
  title: string = "Registrar"; // titulo
  showAlert: boolean = false;

  constructor(
    private userService: SusersService,
    private router: Router,
    private route: ActivatedRoute //para obtener param de la URL
  ) {}

  ngOnInit() {
    // obtiene el ID del usuario desde la URL (si existe)
    this.userId = this.route.snapshot.paramMap.get('_id');

    this.initializeForm();

    if (this.userId) {
      this.title = 'Actualizar'; //depende de actualizamos o editamos  
      this.loadUserData(this.userId);
    }
  
    // controlar alerta si es valido 
    this.userForm.valueChanges.subscribe(() => {
      if (this.userForm.valid) {
    this.showAlert = false; // Oculta la alerta si el formulario es válido
  }
});
}

  initializeForm() {
    this.userForm = new FormGroup({
      _id: new FormControl(null),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+\@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      image: new FormControl('', Validators.pattern(/https?:\/\/.+/))
    });
  }

  loadUserData(id: string) {
    this.userService.getUser(id).subscribe((user: Iuser) => {
      this.userForm.patchValue(user); // cargar datos en el formulario
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.showAlert = false; // oculta la alerta si es válido
      if (this.userId) {
        // si hay un userId, actualizamos el usuario
        this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
          console.log('Usuario actualizado correctamente'); // para ver si se ha actualizado
          this.router.navigate(['/dashboard/users']);
        });
      } else {
        // Si no hay userId, creamos un nuevo usuario
        this.userService.createUser(this.userForm.value).subscribe(() => {
          console.log('Usuario creado correctamente'); // para ver si se ha creado
          this.router.navigate(['/dashboard/newusers']);
        });
      }
    } else {
      this.showAlert = true;
        console.log('Formulario inválido, revisa los campos.');
      }
    }
  }

